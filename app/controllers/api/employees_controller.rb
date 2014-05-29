module Api

  class EmployeesController < ApplicationController

    before_action :set_employee, only: [:show]

    #GET http://server:port/api/employees
    def index

      @employees = Employee.all

      render :json => { :success => true, :data =>  @employees }
    end

    #GET http://server:port/api/employees/1
    def show
      render :json => { :success => true, :data => @employee }
    end


    private
    # Use callbacks to share common setup or constraints between actions.
    def set_employee
      @employee = Employee.find(params[:id])
    end

  end

end
