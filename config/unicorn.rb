worker_processes 4

listen '/tmp/unicorn.sock', :backlog => 1
listen 8080, :tcp_nopush => true

stderr_path File.expand_path('../../log/unicorn/stderr.log', __FILE__)
stdout_path File.expand_path('../../log/unicorn/stdout.log', __FILE__)

pid File.expand_path('../../log/unicorn/unicorn.pid', __FILE__)

preload_app false
