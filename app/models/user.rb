class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  # devise :database_authenticatable, :registerable,
  #        :recoverable, :rememberable, :trackable, :validatable

  devise :trackable, :omniauthable
  attr_accessible :name, :password, :uid, :provider

  def self.new_with_session(params, session)
    super.tap do |user|
      if data = session['devise.facebook_data'] && session['devise.facebook_data']['extra']['raw_info']
        user.email = data['email']
      end
    end
  end

  def self.find_for_twitter_oauth(auth, signed_in_resource = nil)
    user = User.where(:provider => auth.provider, :uid => auth.uid).first
    unless user
      user = User.create(name: auth.info.nickname,
                         provider: auth.provider,
                         uid: auth.uid,
                         # email:
                         password: Devise.friendly_token[0, 20]
      )
    end

    # Save oauth token/secret per login
    user.oauth_token = auth.credentials.token
    user.oauth_token_secret = auth.credentials.secret
    user.save

    user
  end

  def twitter_friends
    twit = Twitter::Client.new(
      :oauth_token => oauth_token,
      :oauth_token_secret => oauth_token_secret
    )
    # TODO: use cursor
    twit.friends
  end
end
