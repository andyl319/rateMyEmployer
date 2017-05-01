class Api::UsersController < ApplicationController

  def create
    @user = user.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.error.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
  
end