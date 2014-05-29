module Api

  class EmployeesController < ApplicationController

    def index

      @employees = Employee.all

      render :json => { :success => true, :data =>  @employees }
    end

  end

end
