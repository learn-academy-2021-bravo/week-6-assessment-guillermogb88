# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)a blogpost controler inheriting from application controler 
class BlogPostsController < ApplicationController
  def index
    # ---2) using this command to all the blogs that have been submitted into the blopost db
    @posts = BlogPost.all
  end

  def show
    # ---3) it is a restful route that will find item in the db
    @post = BlogPost.find(params[:id])
  end

  # ---4) t vhis will create a new object but wont save it to the db unless you do a .save 
  def new
    @post = Post.new
  end

  def create
    # ---5) this will create a new post and it will automatically save it to the db 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) displays the routes for the user to change change it
  def edit 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) takes the parameters from the form and actually changes them.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) this will delete the actual object 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) this is creating the stronf parameters for the security
  private
  def blog_post_params
    # ---10) adding security so that only :title and content can be added
    params.require(:blog_post).permit(:title, :content)
  end

end
