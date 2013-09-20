require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module CookieClickerGenerator
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]

    config.i18n.default_locale = :en

    THUMBNAIL_MAX_PIXELS = 200

    CC_IMAGES = {
      # favicon.ico
      'favicon.ico' => {
        :format => 'ico',
        :width => 16,
        :height => 16,
      },

      # Setsubi
      'cursoricon.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'grandmaIcon.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'farmIcon.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'factoryIcon.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'mineIcon.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'shipmentIcon.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'alchemylabIcon.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'portalIcon.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'timemachineIcon.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'antimattercondenserIcon.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },

      # Field items
      'cursor.png' => {
        :format => 'png',
        :width => 32,
        :height => 32,
      },
      'farm.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'factory.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'mine.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'shipment.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'alchemylab.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'portal.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'timemachine.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'antimattercondenser.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },

      # Backgrounds for field
      'grandmaBackground.png' => {
        :format => 'png',
        :width => 128,
        :height => 128,
      },
      'farmBackground.png' => {
        :format => 'png',
        :width => 128,
        :height => 128,
      },
      'factoryBackground.png' => {
        :format => 'png',
        :width => 128,
        :height => 128,
      },
      'mineBackground.png' => {
        :format => 'png',
        :width => 128,
        :height => 128,
      },
      'shipmentBackground.png' => {
        :format => 'png',
        :width => 128,
        :height => 128,
      },
      'alchemylabBackground.png' => {
        :format => 'png',
        :width => 128,
        :height => 128,
      },
      'portalBackground.png' => {
        :format => 'png',
        :width => 128,
        :height => 128,
      },
      'timemachineBackground.png' => {
        :format => 'png',
        :width => 128,
        :height => 128,
      },
      'antimattercondenserBackground.png' => {
        :format => 'png',
        :width => 128,
        :height => 128,
      },

      # grandma
      'grandma.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'farmerGrandma.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'workerGrandma.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'minerGrandma.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'cosmicGrandma.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'transmutedGrandma.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'alteredGrandma.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'grandmasGrandma.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'antiGrandma.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'mysteriousHero.png' => {
        :format => 'png',
        :width => 96,
        :height => 96,
      },
      'mysteriousOpponent.png' => {
        :format => 'png',
        :width => 96,
        :height => 96,
      },

      # granmas backgrounds
      'grandmas1.jpg' => {
        :format => 'jpg',
        :width => 256,
        :height => 256,
      },
      'grandmas2.jpg' => {
        :format => 'jpg',
        :width => 256,
        :height => 256,
      },
      'grandmas3.jpg' => {
        :format => 'jpg',
        :width => 256,
        :height => 256,
      },

      # Cookie/Golden Cookie
      'perfectCookie.png' => {
        :format => 'png',
        :width => 512,
        :height => 512,
      },
      'imperfectCookie.png' => {
        :format => 'png',
        :width => 512,
        :height => 512,
      },
      'shine.png' => {
        :format => 'png',
        :width => 128,
        :height => 128,
      },
      'goldCookie.png' => {
        :format => 'png',
        :width => 96,
        :height => 96,
      },
      'wrathCookie.png' => {
        :format => 'png',
        :width => 96,
        :height => 96,
      },
      'smallCookies.png' => {
        :format => 'png',
        :width => 512,
        :height => 64,
      },
      'money.png' => {
        :format => 'png',
        :width => 16,
        :height => 16,
      },
      'cookieShower1.png' => {
        :format => 'png',
        :width => 512,
        :height => 512,
      },
      'cookieShower2.png' => {
        :format => 'png',
        :width => 512,
        :height => 512,
      },
      'cookieShower3.png' => {
        :format => 'png',
        :width => 512,
        :height => 512,
      },

      # milk
      'milk.png' => {
        :format => 'png',
        :width => 480,
        :height => 640,
      },
      'milkWave.png' => {
        :format => 'png',
        :width => 480,
        :height => 480,
      },
      'chocolateMilkWave.png' => {
        :format => 'png',
        :width => 480,
        :height => 480,
      },
      'raspberryWave.png' => {
        :format => 'png',
        :width => 480,
        :height => 480,
      },

      # Panel/Frames
      'panelHorizontal.png' => {
        :format => 'png',
        :width => 640,
        :height => 16,
      },
      'panelVertical.png' => {
        :format => 'png',
        :width => 16,
        :height => 640,
      },
      'upgradeFrame.png' => {
        :format => 'png',
        :width => 60,
        :height => 60,
      },

      # Backgrounds
      'bgBlue.jpg' => {
        :format => 'png',
        :width => 600,
        :height => 600,
      },
      'storeTile.jpg' => {
        :format => 'png',
        :width => 300,
        :height => 256,
      },

      # misc
      'icons.png' => {
        :format => 'png',
        :width => 960,
        :height => 576,
      },
      'blackGradient.png' => {
        :format => 'png',
        :width => 2,
        :height => 640,
      },
      'control.png' => {
        :format => 'png',
        :width => 144,
        :height => 144,
      },
      'darkNoise.png' => {
        :format => 'png',
        :width => 64,
        :height => 64,
      },
      'infoBG.png' => {
        :format => 'png',
        :width => 16,
        :height => 16,
      },
      'infoBGfade.png' => {
        :format => 'png',
        :width => 16,
        :height => 16,
      },
      'mapBG.jpg' => {
        :format => 'jpg',
        :width => 600,
        :height => 600,
      },
      'mapIcons.png' => {
        :format => 'png',
        :width => 128,
        :height => 128,
      },
      'mapTiles.png' => {
        :format => 'png',
        :width => 128,
        :height => 128,
      },
      'marshmallows.png' => {
        :format => 'png',
        :width => 192,
        :height => 64,
      },
    }

    CC_LANGS = {
      'ja' => {
        desc: 'Japanese',
      },
      'en' => {
        desc: 'English',
      }
    }
  end
end
