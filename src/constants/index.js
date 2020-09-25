const LOGIN = {
  LOAD: 'LOGIN_LOAD',
  LOAD_SUCCESS: 'LOGIN_LOAD_SUCCESS',
  LOAD_FAIL: 'LOGIN_LOAD_FAIL',
};

const REGISTER = {
  REQUEST: 'REGISTER_REQUEST',
  REQUEST_SUCCESS: 'REGISTER_REQUEST_SUCCESS',
  REQUEST_FAIL: 'REGISTER_REQUEST_FAIL',
};

const LOADING = {
  SHOW_LOADING: 'GLOBAL_SHOW_LOADING',
  HIDE_LOADING: 'GLOBAL_HIDE_LOADING',
};

const MESSAGE = {
  SHOW_MESSAGE: 'GLOBAL_SHOW_MESSAGE',
  HIDE_MESSAGE: 'GLOBAL_HIDE_MESSAGE',
};

const LOGOUT = {
  SUBMIT: 'LOGOUT_SUBMIT',
  SUCCESS: 'LOGOUT_SUCCESS',
};

const INFO = {
  LOAD_INFO: 'USER_INFO_LOAD',
  SUCCESS_INFO: 'USER_INFO_SUCCESS',
  FAILED_INFO: 'USER_INFO_FAILED',
};

const CHANGE_PASSWORD = {
  CHANGE_PASSWORD_LOAD: 'CHANGE_PASSWORD_REQUEST',
  CHANGE_PASSWORD_REFRESH: 'REFRESH_CHANGE_PASSWORD',
  CHANGE_PASSWORD_SUCCESS: 'SUCCESS_CHANGE_PASSWORD',
  CHANGE_PASSWORD_FAILED: 'FAILED_CHANGE_PASSWORD',
};

const GET_GROUP_LIST = {
  REQUEST_GROUP_LIST: 'LOAD_GROUP_LIST',
  SUCCESS_GROUP_LIST: 'SUCCESS_GROUP_LIST',
  FAILED_GROUP_LIST: 'FAILED_GROUP_LIST',
};

const GET_GROUP = {
  REQUEST_GROUP: 'LOAD_GROUP',
  SUCCESS_GROUP: 'SUCCESS_GROUP',
  FAILED_GROUP: 'FAILED_GROUP',
};

const GET_TOPIC_LIST = {
  REQUEST_TOPIC_LIST: 'TOPIC_LIST_REQUEST',
  TOPIC_LIST_SUCCESS: 'SUCCESS_TOPIC_LIST',
  REQUEST_TOPIC_LIST_SINGLE: 'SINGLE_REQUEST_TOPIC_LIST',
  TOPIC_LIST_SUCCESS_SINGLE: 'SINGLE_TOPIC_LIST_SUCCESS',
  FAILED_TOPIC_LIST: 'FAILED_TOPIC_LIST',
};

const GET_POST_LIST = {
  REQUEST_POST_LIST: 'POST_LIST_REQUEST',
  POST_LIST_SUCCESS: 'SUCCESS_POST_LIST',
  FAILED_POST_LIST: 'FAILED_POST_LIST',
};

const REQUEST_POST = {
  LOAD_POST: 'POST_REQUEST',
  POST_SUCCESS: 'SUCCESS_POST',
  FAILED_POST: 'FAILED_POST',
};
const REQUEST_TOPIC = {
  LOAD_TOPIC: 'TOPIC_REQUEST',
  TOPIC_SUCCESS: 'SUCCESS_TOPIC',
  FAILED_TOPIC: 'FAILED_TOPIC',
};

const COMMENT_REQUEST = {
  COMMENT_POST_REQUEST: 'COMMENT_REQUEST',
  COMMENT_POST_SUCCESS: 'COMMENT_SUCCESS',
  COMMENT_POST_FAILED: 'COMMENT_FAILED',
};

const SUBMIT_POST = {
  SUBMIT_POST_REQUEST: 'REQUEST_SUBMIT_POST',
  SUBMIT_POST_SUCCESS: 'SUCCESS_SUBMIT_POST',
  SUBMIT_POST_FAILED: 'FAILED_SUBMIT_POST',
  SUBMIT_POST_CLEAR: 'CLEAR_SUBMIT_POST',
};

const SUBMIT_LIKE = {
  SUBMIT_LIKE_REQUEST: 'REQUEST_SUBMIT_LIKE',
  SUBMIT_LIKE_SUCCESS: 'SUCCESS_SUBMIT_LIKE',
  SUBMIT_LIKE_FAILED: 'FAILED_SUBMIT_LIKE',
  SUBMIT_LIKE_CLEAR: 'CLEAR_SUBMIT_LIKE',
};

const SUBMIT_UNLIKE = {
  SUBMIT_UNLIKE_REQUEST: 'REQUEST_SUBMIT_UNLIKE',
  SUBMIT_UNLIKE_SUCCESS: 'SUCCESS_SUBMIT_UNLIKE',
  SUBMIT_UNLIKE_FAILED: 'FAILED_SUBMIT_UNLIKE',
  SUBMIT_UNLIKE_CLEAR: 'CLEAR_SUBMIT_UNLIKE',
};

const SUBMIT_TOPIC = {
  SUBMIT_TOPIC_REQUEST: 'REQUEST_SUBMIT_TOPIC',
  SUBMIT_TOPIC_SUCCESS: 'SUCCESS_SUBMIT_TOPIC',
  SUBMIT_TOPIC_FAILED: 'FAILED_SUBMIT_TOPIC',
  SUBMIT_TOPIC_CLEAR: 'CLEAR_SUBMIT_TOPIC',
};

const SUBMIT_GROUP = {
  SUBMIT_GROUP_REQUEST: 'REQUEST_SUBMIT_GROUP',
  SUBMIT_GROUP_SUCCESS: 'SUCCESS_SUBMIT_GROUP',
  SUBMIT_GROUP_FAILED: 'FAILED_SUBMIT_GROUP',
  SUBMIT_GROUP_CLEAR: 'CLEAR_SUBMIT_GROUP',
};

const GET_USER_LIST = {
  GET_USER_LIST_REQUEST: 'REQUEST_GET_USER_LIST',
  GET_USER_LIST_SUCCESS: 'SUCCESS_GET_USER_LIST',
  GET_USER_LIST_FAILED: 'FAILED_GET_USER_LIST',
};

const UPDATE_ROLE = {
  UPDATE_ROLE_REQUEST: 'REQUEST_UPDATE_ROLE',
  UPDATE_ROLE_SUCCESS: 'SUCCESS_UPDATE_ROLE',
  UPDATE_ROLE_FAILED: 'FAILED_UPDATE_ROLE',
  UPDATE_ROLE_CLEAR: 'CLEAR_UPDATE_ROLE',
};

const DELETE_COMMENT = {
  DELETE_COMMENT_REQUEST: 'REQUEST_DELETE_COMMENT',
  DELETE_COMMENT_SUCCESS: 'SUCCESS_DELETE_COMMENT',
  DELETE_COMMENT_FAILED: 'FAILED_DELETE_COMMENT',
  DELETE_COMMENT_CLEAR: 'CLEAR_DELETE_COMMENT',
};

const GET_ALL_COMMENT = {
  GET_ALL_COMMENT_REQUEST: 'REQUEST_GET_ALL_COMMENT',
  GET_ALL_COMMENT_SUCCESS: 'SUCCESS_GET_ALL_COMMENT',
  GET_ALL_COMMENT_FAILED: 'FAILED_GET_ALL_COMMENT',
};

const UPDATE_COMMENT = {
  UPDATE_COMMENT_REQUEST: 'REQUEST_UPDATE_COMMENT',
  UPDATE_COMMENT_SUCCESS: 'SUCCESS_UPDATE_COMMENT',
  UPDATE_COMMENT_FAILED: 'FAILED_UPDATE_COMMENT',
  UPDATE_COMMENT_CLEAR: 'CLEAR_UPDATE_COMMENT',
};

const DELETE_USER = {
  DELETE_USER_REQUEST: 'REQUEST_DELETE_USER',
  DELETE_USER_SUCCESS: 'SUCCESS_DELETE_USER',
  DELETE_USER_FAILED: 'FAILED_DELETE_USER',
  DELETE_USER_CLEAR: 'CLEAR_DELETE_USER',
};

const DELETE_GROUP = {
  DELETE_GROUP_REQUEST: 'REQUEST_DELETE_GROUP',
  DELETE_GROUP_SUCCESS: 'SUCCESS_DELETE_GROUP',
  DELETE_GROUP_FAILED: 'FAILED_DELETE_GROUP',
  DELETE_GROUP_CLEAR: 'CLEAR_DELETE_GROUP',
};

const UPDATE_GROUP = {
  UPDATE_GROUP_REQUEST: 'REQUEST_UPDATE_GROUP',
  UPDATE_GROUP_SUCCESS: 'SUCCESS_UPDATE_GROUP',
  UPDATE_GROUP_FAILED: 'FAILED_UPDATE_GROUP',
  UPDATE_GROUP_CLEAR: 'CLEAR_UPDATE_GROUP',
};

const DELETE_TOPIC = {
  DELETE_TOPIC_REQUEST: 'REQUEST_DELETE_TOPIC',
  DELETE_TOPIC_SUCCESS: 'SUCCESS_DELETE_TOPIC',
  DELETE_TOPIC_FAILED: 'FAILED_DELETE_TOPIC',
  DELETE_TOPIC_CLEAR: 'CLEAR_DELETE_TOPIC',
};

const UPDATE_TOPIC = {
  UPDATE_TOPIC_REQUEST: 'REQUEST_UPDATE_TOPIC',
  UPDATE_TOPIC_SUCCESS: 'SUCCESS_UPDATE_TOPIC',
  UPDATE_TOPIC_FAILED: 'FAILED_UPDATE_TOPIC',
  UPDATE_TOPIC_CLEAR: 'CLEAR_UPDATE_TOPIC',
};

const DELETE_POST = {
  DELETE_POST_REQUEST: 'REQUEST_DELETE_POST',
  DELETE_POST_SUCCESS: 'SUCCESS_DELETE_POST',
  DELETE_POST_FAILED: 'FAILED_DELETE_POST',
  DELETE_POST_CLEAR: 'CLEAR_DELETE_POST',
};

const UPDATE_POST = {
  UPDATE_POST_REQUEST: 'REQUEST_UPDATE_POST',
  UPDATE_POST_SUCCESS: 'SUCCESS_UPDATE_POST',
  UPDATE_POST_FAILED: 'FAILED_UPDATE_POST',
  UPDATE_POST_CLEAR: 'CLEAR_UPDATE_POST',
};

const LIKE_COMMENT = {
  LIKE_COMMENT_REQUEST: 'REQUEST_LIKE_COMMENT',
  LIKE_COMMENT_SUCCESS: 'SUCCESS_LIKE_COMMENT',
  LIKE_COMMENT_FAILED: 'FAILED_LIKE_COMMENT',
  LIKE_COMMENT_CLEAR: 'CLEAR_LIKE_COMMENT',
};

const UNLIKE_COMMENT = {
  UNLIKE_COMMENT_REQUEST: 'REQUEST_UNLIKE_COMMENT',
  UNLIKE_COMMENT_SUCCESS: 'SUCCESS_UNLIKE_COMMENT',
  UNLIKE_COMMENT_FAILED: 'FAILED_UNLIKE_COMMENT',
  UNLIKE_COMMENT_CLEAR: 'CLEAR_UNLIKE_COMMENT',
};

export {
  UNLIKE_COMMENT,
  LIKE_COMMENT,
  SUBMIT_UNLIKE,
  REQUEST_TOPIC,
  GET_GROUP,
  DELETE_TOPIC,
  UPDATE_TOPIC,
  DELETE_POST,
  UPDATE_POST,
  DELETE_GROUP,
  UPDATE_GROUP,
  DELETE_USER,
  UPDATE_COMMENT,
  GET_ALL_COMMENT,
  DELETE_COMMENT,
  UPDATE_ROLE,
  GET_USER_LIST,
  SUBMIT_GROUP,
  SUBMIT_TOPIC,
  SUBMIT_LIKE,
  LOGIN,
  REGISTER,
  LOADING,
  MESSAGE,
  LOGOUT,
  INFO,
  CHANGE_PASSWORD,
  GET_GROUP_LIST,
  GET_TOPIC_LIST,
  GET_POST_LIST,
  REQUEST_POST,
  COMMENT_REQUEST,
  SUBMIT_POST,
};
