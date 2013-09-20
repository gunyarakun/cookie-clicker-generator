require 'test_helper'

class CookieClickersControllerTest < ActionController::TestCase
  setup do
    @cookie_clicker = cookie_clickers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:cookie_clickers)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create cookie_clicker" do
    assert_difference('CookieClicker.count') do
      post :create, cookie_clicker: {  }
    end

    assert_redirected_to cookie_clicker_path(assigns(:cookie_clicker))
  end

  test "should show cookie_clicker" do
    get :show, id: @cookie_clicker
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @cookie_clicker
    assert_response :success
  end

  test "should update cookie_clicker" do
    patch :update, id: @cookie_clicker, cookie_clicker: {  }
    assert_redirected_to cookie_clicker_path(assigns(:cookie_clicker))
  end

  test "should destroy cookie_clicker" do
    assert_difference('CookieClicker.count', -1) do
      delete :destroy, id: @cookie_clicker
    end

    assert_redirected_to cookie_clickers_path
  end
end
