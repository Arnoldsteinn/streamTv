class Api::FollowsController < ApplicationController
  def show
    follow = params[:user][:follow] == 'follower' ? 'follower' : 'followee'
    users_info = {}
    on_user_id = params[:user][:id]
    if follow == 'followee'
      # All users who are following the user specified by the followee_id
      # Followee_id should always be the channel's id
      @follows = Api::Follow.where(followee_id: on_user_id)
      @follows.each do |follow|
        user_id = follow.follower_id
        username = User.find_by(id: user_id).username
        users_info[user_id] = username
        # user_ids.push({username: username, id: user_id})
      end
    else
      # All users who are followed by the user specified by follower_id
      # Follower_id should always be current_user's id
      @follows = Api::Follow.where(follower_id: on_user_id)
      @follows.each do |follow|
        user_id = follow.followee_id
        username = User.find_by(id: user_id).username
        users_info[user_id] = username
        # user_ids.push({username: username, id: user_id})
      end
    end
    render json: {users_info: users_info, get_request: follow}
  end

  def create
    @follow = Api::Follow.new(follow_params)
    if @follow.save
      follower = User.find_by(id: @follow.follower_id)
      followee = User.find_by(id: @follow.followee_id)
      render json: {follow: @follow, follower: follower, followee: followee}
    else
      flash[:errors] = @follows.errors.full_messages
      render json: { errors: flash[:errors] }, status: 422
    end
  end

  def destroy
    params = follow_params
    @follow = Api::Follow
                .where(followee_id: params[:followee_id])
                .where(follower_id: params[:follower_id])
    render json: @follow
  end 

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end
