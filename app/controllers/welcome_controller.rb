class WelcomeController < ApplicationController
  def index
    @singapore_photos = Instagram.tag_recent_media('merlion')
    @london_photos = Instagram.tag_recent_media('thisislondon')
  end
end
