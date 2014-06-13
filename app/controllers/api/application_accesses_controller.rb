module Api

  class ApplicationAccessesController < ApplicationController

    before_action :set_application_accesses, only: [:show]
    respond_to :json

    def index

      @application_accesses = ApplicationAccess.all

      #render :json => { :success => true, :data =>  @applications }
      render json: @application_accesses
    end

    def show
      render json: @application_access
    end


    private
    # Use callbacks to share common setup or constraints between actions.
    def set_application_accesses
      @application_access = ApplicationAccess.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def application_params
      params.require(:application_access).permit(:name, :description, :created_at, :updated_at)
    end

  end

end
