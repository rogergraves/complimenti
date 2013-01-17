class CreateRespondents < ActiveRecord::Migration
  def change
    create_table :respondents do |t|
      t.string :email
      t.string :source
      t.integer :amount
      t.string :event

      t.timestamps
    end
  end
end
