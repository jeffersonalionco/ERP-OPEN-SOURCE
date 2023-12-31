# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'orders control' do
  context 'when get root_path' do
    let(:user) { FactoryBot.create(:user) }

    before do
      FactoryBot.create(:bling_datum, account_id: user.account.id, expires_at: Time.now + 2.day)
      sign_in user
      get root_path
    end

    it 'is a successful response' do
      VCR.use_cassette('bling_order_situation') do
        expect(response).to be_successful
      end
    end
  end
end
