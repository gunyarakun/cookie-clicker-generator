# coding: utf-8
# This rake task is from
# http://www.techscore.com/blog/2012/10/19/custom-unicorn-rake-tasks/

namespace :unicorn do

  UNICORN_CONFIG_FILE_PATH = Rails.root.join('config', 'unicorn.rb')
  UNICORN_PID_FILE_PATH = Rails.root.join('tmp', 'pids', 'unicorn.pid')

  def unicorn_master_pid_string
    pid_file_path = UNICORN_PID_FILE_PATH
    return nil unless File.exists?(pid_file_path)

    pid_string = `ps h -o pid,command #{File.read(pid_file_path).to_i}`.strip
    return nil unless pid_string.present?

    pid_string
  end

  def unicorn_master_pid
    pid_string = unicorn_master_pid_string
    return nil unless pid_string

    pid_string.to_i
  end

  def unicorn_worker_pid_strings
    pid = unicorn_master_pid
    return nil unless pid

    `ps h -o pid,command --ppid #{pid}`.split(/\n/).map(&:strip)
  end

  def unicorn_worker_pids
    pid_strings = unicorn_worker_pid_strings
    return nil unless pid_strings

    pid_strings.map(&:to_i)
  end

  def unicorn_pid_strings
    pid_strings = [unicorn_master_pid_string, unicorn_worker_pid_strings].flatten.compact
    return nil unless pid_strings.present?

    pid_strings
  end

  def unicorn_pids
    pid_strings = unicorn_pid_strings
    return nil unless pid_strings

    pid_strings.map(&:to_i)
  end

  def send_signal_to_unicorn_master(signal, failed_message='Not running.')
    if pid = unicorn_master_pid
      Process.kill(signal, pid)
    else
      puts failed_message if failed_message.present?
    end
  end

  desc 'Show unicorn process-pids.'
  task(:pids) { puts (unicorn_pid_strings || 'Not running.') }

  desc 'Start unicorn server.'
  task(:start) { system("unicorn -c '#{UNICORN_CONFIG_FILE_PATH}' -E #{Rails.env} -D") }

  desc 'Reloads config file and gracefully restart all workers (Send signal HUP to master process).'
  task(:graceful) { send_signal_to_unicorn_master(:HUP) }

  desc 'Quick shutdown, kills all workers immediately (Send signal TERM to master process).'
  task(:kill) { send_signal_to_unicorn_master(:TERM) }

  desc 'Graceful shutdown (Send signal QUIT to master process).'
  task(:stop) { send_signal_to_unicorn_master(:QUIT) }

  desc 'Reopen all logs owned by the master and all workers (Send signal USR1 to master process).'
  task(:reopen_logs) { send_signal_to_unicorn_master(:USR1) }

  desc 'Reexecute the running binary (Send signal USR2 to master process).'
  task(:restart) { send_signal_to_unicorn_master(:USR2) }

  desc 'Gracefully stops workers but keep the master running (Send signal WINCH to master process).'
  task('workers:stop') { send_signal_to_unicorn_master(:WINCH) }

  desc 'Increment the number of worker processes by one (Send signal TTIN to master process).'
  task('workers:increment') { send_signal_to_unicorn_master(:TTIN) }

  desc 'Decrement the number of worker processes by one (Send signal TTOU to master process).'
  task('workers:decrement') { send_signal_to_unicorn_master(:TTOU) }

  def worker_number_pid_name_triples
    number_pid_name_triples = (unicorn_worker_pid_strings || []).flatten.map do |line|
      pid, name = *line.split(' ').values_at(0, 2)
      number = name.gsub(/\D/, '')
      [number.to_i, pid.to_i, name]
    end

    number_pid_name_triples.sort
  end

  worker_number_pid_name_triples.each do |number, pid, name|
    desc "Quick shutdown, immediately exit (Send signal TERM to #{name} process)."
    task("worker#{number}:kill") { Process.kill(:TERM, pid) }

    desc "Gracefully exit after finishing the current request (Send signal QUIT to #{name} process)."
    task("worker#{number}:stop") { Process.kill(:QUIT, pid) }

    desc "Reopen all logs owned by the worker process (Send signal USR1 to #{name} process)."
    task("worker#{number}:reopen_logs") { Process.kill(:USR1, pid) }

    desc "Output thread dump (Send signal USR2 to #{name} process)."
    task("worker#{number}:thread_dump") { Process.kill(:USR2, pid) }
  end

end if defined?(Unicorn)
