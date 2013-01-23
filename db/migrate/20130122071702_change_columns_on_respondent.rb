class ChangeColumnsOnRespondent < ActiveRecord::Migration
  def change
    add_column :respondents, :number_of_donors, :string
    remove_column :respondents, :amount
  end
end
