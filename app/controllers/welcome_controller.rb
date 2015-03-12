class WelcomeController < ApplicationController
  def index
    @singapore_photos = Instagram.tag_recent_media('singaporelandscape')
  end
end
