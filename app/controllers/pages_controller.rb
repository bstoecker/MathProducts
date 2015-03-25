class PagesController < ApplicationController
  
  
  
  def index
    params[:name] ||= "home"
    render :action => params[:name]
  end
  
end
