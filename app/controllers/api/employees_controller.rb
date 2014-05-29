module Api

  class EmployeesController < ApplicationController

    before_action :set_employee, only: [:show, :update]
    respond_to :json

    #GET http://server:port/api/employees
    def index

      @employees = Employee.all

      render :json => { :success => true, :data =>  @employees }
    end

    #GET http://server:port/api/employees/1
    def show
      render :json => { :success => true, :data => @employee }
    end


    #POST
    def create

      @employee = Employee.new(employee_params)

      if @employee.save
        render :json => { :success => true, :data => @employee }, :status => :created
      else
        render :json => { :success => false, :errors => @employee.errors }, :status => :unprocessable_entity
      end
    end

    def update

      #http://stackoverflow.com/questions/6770350/rails-update-attributes-without-save
      @employee.attributes = employee_params

      #if @employee.update_attributes(employee_params)
      if @employee.save
        render :json => { :success => true }
      else
        format.json { render :json => { :success => false, :errors => @employee.errors }, :status => :unprocessable_entity }
      end
    end


    private
    # Use callbacks to share common setup or constraints between actions.
    def set_employee
      @employee = Employee.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def employee_params
      params.require(:employee).permit(:fname, :lname, :manager_id, :title, :department, :phone_cell, :phone_home, :phone_office, :email, :tags, :created_at, :updated_at)
    end

  end

end
