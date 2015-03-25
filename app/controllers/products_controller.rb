class ProductsController < ApplicationController
  
  def index
    render :action => params[:name]
  end
  
  def post
    @lastname = params[:lastname]
    @firstname = params[:firstname]
    
=begin    respond_to do |format|
      format.html { redirect_to root_path, notice: 'Question was successfully created.' }
      format.json { render json: {firstname: @firstname, lastname: @lastname}, status: :created }
=end
    render :partial => "post" # :layout => false#
  end
  
end
