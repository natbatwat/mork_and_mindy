class WelcomeController < ApplicationController
  def index
    @singapore_photos = Instagram.tag_recent_media('singapore')
  end
end
