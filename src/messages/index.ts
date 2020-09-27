import * as PROTO_MESSAGE from "./PROTO_MESSAGE";
import * as ERROR_RES from "./ERROR_RES";
import * as HEARTBEAT_EVENT from "./HEARTBEAT_EVENT";
import * as PROTO_OA_APPLICATION_AUTH_REQ from "./PROTO_OA_APPLICATION_AUTH_REQ";
import * as PROTO_OA_APPLICATION_AUTH_RES from "./PROTO_OA_APPLICATION_AUTH_RES";
import * as PROTO_OA_ACCOUNT_AUTH_REQ from "./PROTO_OA_ACCOUNT_AUTH_REQ";
import * as PROTO_OA_ACCOUNT_AUTH_RES from "./PROTO_OA_ACCOUNT_AUTH_RES";
import * as PROTO_OA_VERSION_REQ from "./PROTO_OA_VERSION_REQ";
import * as PROTO_OA_VERSION_RES from "./PROTO_OA_VERSION_RES";
import * as PROTO_OA_NEW_ORDER_REQ from "./PROTO_OA_NEW_ORDER_REQ";
import * as PROTO_OA_TRAILING_SL_CHANGED_EVENT from "./PROTO_OA_TRAILING_SL_CHANGED_EVENT";
import * as PROTO_OA_CANCEL_ORDER_REQ from "./PROTO_OA_CANCEL_ORDER_REQ";
import * as PROTO_OA_AMEND_ORDER_REQ from "./PROTO_OA_AMEND_ORDER_REQ";
import * as PROTO_OA_AMEND_POSITION_SLTP_REQ from "./PROTO_OA_AMEND_POSITION_SLTP_REQ";
import * as PROTO_OA_CLOSE_POSITION_REQ from "./PROTO_OA_CLOSE_POSITION_REQ";
import * as PROTO_OA_ASSET_LIST_REQ from "./PROTO_OA_ASSET_LIST_REQ";
import * as PROTO_OA_ASSET_LIST_RES from "./PROTO_OA_ASSET_LIST_RES";
import * as PROTO_OA_SYMBOLS_LIST_REQ from "./PROTO_OA_SYMBOLS_LIST_REQ";
import * as PROTO_OA_SYMBOLS_LIST_RES from "./PROTO_OA_SYMBOLS_LIST_RES";
import * as PROTO_OA_SYMBOL_BY_ID_REQ from "./PROTO_OA_SYMBOL_BY_ID_REQ";
import * as PROTO_OA_SYMBOL_BY_ID_RES from "./PROTO_OA_SYMBOL_BY_ID_RES";
import * as PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ from "./PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ";
import * as PROTO_OA_SYMBOLS_FOR_CONVERSION_RES from "./PROTO_OA_SYMBOLS_FOR_CONVERSION_RES";
import * as PROTO_OA_SYMBOL_CHANGED_EVENT from "./PROTO_OA_SYMBOL_CHANGED_EVENT";
import * as PROTO_OA_TRADER_REQ from "./PROTO_OA_TRADER_REQ";
import * as PROTO_OA_TRADER_RES from "./PROTO_OA_TRADER_RES";
import * as PROTO_OA_TRADER_UPDATE_EVENT from "./PROTO_OA_TRADER_UPDATE_EVENT";
import * as PROTO_OA_RECONCILE_REQ from "./PROTO_OA_RECONCILE_REQ";
import * as PROTO_OA_RECONCILE_RES from "./PROTO_OA_RECONCILE_RES";
import * as PROTO_OA_EXECUTION_EVENT from "./PROTO_OA_EXECUTION_EVENT";
import * as PROTO_OA_SUBSCRIBE_SPOTS_REQ from "./PROTO_OA_SUBSCRIBE_SPOTS_REQ";
import * as PROTO_OA_SUBSCRIBE_SPOTS_RES from "./PROTO_OA_SUBSCRIBE_SPOTS_RES";
import * as PROTO_OA_UNSUBSCRIBE_SPOTS_REQ from "./PROTO_OA_UNSUBSCRIBE_SPOTS_REQ";
import * as PROTO_OA_UNSUBSCRIBE_SPOTS_RES from "./PROTO_OA_UNSUBSCRIBE_SPOTS_RES";
import * as PROTO_OA_SPOT_EVENT from "./PROTO_OA_SPOT_EVENT";
import * as PROTO_OA_ORDER_ERROR_EVENT from "./PROTO_OA_ORDER_ERROR_EVENT";
import * as PROTO_OA_DEAL_LIST_REQ from "./PROTO_OA_DEAL_LIST_REQ";
import * as PROTO_OA_DEAL_LIST_RES from "./PROTO_OA_DEAL_LIST_RES";
import * as PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ from "./PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ";
import * as PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ from "./PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ";
import * as PROTO_OA_GET_TRENDBARS_REQ from "./PROTO_OA_GET_TRENDBARS_REQ";
import * as PROTO_OA_GET_TRENDBARS_RES from "./PROTO_OA_GET_TRENDBARS_RES";
import * as PROTO_OA_EXPECTED_MARGIN_REQ from "./PROTO_OA_EXPECTED_MARGIN_REQ";
import * as PROTO_OA_EXPECTED_MARGIN_RES from "./PROTO_OA_EXPECTED_MARGIN_RES";
import * as PROTO_OA_MARGIN_CHANGED_EVENT from "./PROTO_OA_MARGIN_CHANGED_EVENT";
import * as PROTO_OA_ERROR_RES from "./PROTO_OA_ERROR_RES";
import * as PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ from "./PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ";
import * as PROTO_OA_CASH_FLOW_HISTORY_LIST_RES from "./PROTO_OA_CASH_FLOW_HISTORY_LIST_RES";
import * as PROTO_OA_GET_TICKDATA_REQ from "./PROTO_OA_GET_TICKDATA_REQ";
import * as PROTO_OA_GET_TICKDATA_RES from "./PROTO_OA_GET_TICKDATA_RES";
import * as PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT from "./PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT";
import * as PROTO_OA_CLIENT_DISCONNECT_EVENT from "./PROTO_OA_CLIENT_DISCONNECT_EVENT";
import * as PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ from "./PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ";
import * as PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES from "./PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES";
import * as PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ from "./PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ";
import * as PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES from "./PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES";
import * as PROTO_OA_ASSET_CLASS_LIST_REQ from "./PROTO_OA_ASSET_CLASS_LIST_REQ";
import * as PROTO_OA_ASSET_CLASS_LIST_RES from "./PROTO_OA_ASSET_CLASS_LIST_RES";
import * as PROTO_OA_DEPTH_EVENT from "./PROTO_OA_DEPTH_EVENT";
import * as PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ from "./PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ";
import * as PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES from "./PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES";
import * as PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ from "./PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ";
import * as PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES from "./PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES";
import * as PROTO_OA_SYMBOL_CATEGORY_REQ from "./PROTO_OA_SYMBOL_CATEGORY_REQ";
import * as PROTO_OA_SYMBOL_CATEGORY_RES from "./PROTO_OA_SYMBOL_CATEGORY_RES";
import * as PROTO_OA_ACCOUNT_LOGOUT_REQ from "./PROTO_OA_ACCOUNT_LOGOUT_REQ";
import * as PROTO_OA_ACCOUNT_LOGOUT_RES from "./PROTO_OA_ACCOUNT_LOGOUT_RES";
import * as PROTO_OA_ACCOUNT_DISCONNECT_EVENT from "./PROTO_OA_ACCOUNT_DISCONNECT_EVENT";
import * as PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES from "./PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES";
import * as PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES from "./PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES";
import * as PROTO_OA_MARGIN_CALL_LIST_REQ from "./PROTO_OA_MARGIN_CALL_LIST_REQ";
import * as PROTO_OA_MARGIN_CALL_LIST_RES from "./PROTO_OA_MARGIN_CALL_LIST_RES";
import * as PROTO_OA_MARGIN_CALL_UPDATE_REQ from "./PROTO_OA_MARGIN_CALL_UPDATE_REQ";
import * as PROTO_OA_MARGIN_CALL_UPDATE_RES from "./PROTO_OA_MARGIN_CALL_UPDATE_RES";
import * as PROTO_OA_MARGIN_CALL_UPDATE_EVENT from "./PROTO_OA_MARGIN_CALL_UPDATE_EVENT";
import * as PROTO_OA_MARGIN_CALL_TRIGGER_EVENT from "./PROTO_OA_MARGIN_CALL_TRIGGER_EVENT";
import * as PROTO_OA_REFRESH_TOKEN_REQ from "./PROTO_OA_REFRESH_TOKEN_REQ";
import * as PROTO_OA_REFRESH_TOKEN_RES from "./PROTO_OA_REFRESH_TOKEN_RES";

const handlers = [
  PROTO_MESSAGE,
  ERROR_RES,
  HEARTBEAT_EVENT,
  PROTO_OA_APPLICATION_AUTH_REQ,
  PROTO_OA_APPLICATION_AUTH_RES,
  PROTO_OA_ACCOUNT_AUTH_REQ,
  PROTO_OA_ACCOUNT_AUTH_RES,
  PROTO_OA_VERSION_REQ,
  PROTO_OA_VERSION_RES,
  PROTO_OA_NEW_ORDER_REQ,
  PROTO_OA_TRAILING_SL_CHANGED_EVENT,
  PROTO_OA_CANCEL_ORDER_REQ,
  PROTO_OA_AMEND_ORDER_REQ,
  PROTO_OA_AMEND_POSITION_SLTP_REQ,
  PROTO_OA_CLOSE_POSITION_REQ,
  PROTO_OA_ASSET_LIST_REQ,
  PROTO_OA_ASSET_LIST_RES,
  PROTO_OA_SYMBOLS_LIST_REQ,
  PROTO_OA_SYMBOLS_LIST_RES,
  PROTO_OA_SYMBOL_BY_ID_REQ,
  PROTO_OA_SYMBOL_BY_ID_RES,
  PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ,
  PROTO_OA_SYMBOLS_FOR_CONVERSION_RES,
  PROTO_OA_SYMBOL_CHANGED_EVENT,
  PROTO_OA_TRADER_REQ,
  PROTO_OA_TRADER_RES,
  PROTO_OA_TRADER_UPDATE_EVENT,
  PROTO_OA_RECONCILE_REQ,
  PROTO_OA_RECONCILE_RES,
  PROTO_OA_EXECUTION_EVENT,
  PROTO_OA_SUBSCRIBE_SPOTS_REQ,
  PROTO_OA_SUBSCRIBE_SPOTS_RES,
  PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
  PROTO_OA_UNSUBSCRIBE_SPOTS_RES,
  PROTO_OA_SPOT_EVENT,
  PROTO_OA_ORDER_ERROR_EVENT,
  PROTO_OA_DEAL_LIST_REQ,
  PROTO_OA_DEAL_LIST_RES,
  PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ,
  PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ,
  PROTO_OA_GET_TRENDBARS_REQ,
  PROTO_OA_GET_TRENDBARS_RES,
  PROTO_OA_EXPECTED_MARGIN_REQ,
  PROTO_OA_EXPECTED_MARGIN_RES,
  PROTO_OA_MARGIN_CHANGED_EVENT,
  PROTO_OA_ERROR_RES,
  PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ,
  PROTO_OA_CASH_FLOW_HISTORY_LIST_RES,
  PROTO_OA_GET_TICKDATA_REQ,
  PROTO_OA_GET_TICKDATA_RES,
  PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT,
  PROTO_OA_CLIENT_DISCONNECT_EVENT,
  PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
  PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
  PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ,
  PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES,
  PROTO_OA_ASSET_CLASS_LIST_REQ,
  PROTO_OA_ASSET_CLASS_LIST_RES,
  PROTO_OA_DEPTH_EVENT,
  PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ,
  PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES,
  PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ,
  PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES,
  PROTO_OA_SYMBOL_CATEGORY_REQ,
  PROTO_OA_SYMBOL_CATEGORY_RES,
  PROTO_OA_ACCOUNT_LOGOUT_REQ,
  PROTO_OA_ACCOUNT_LOGOUT_RES,
  PROTO_OA_ACCOUNT_DISCONNECT_EVENT,
  PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES,
  PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES,
  PROTO_OA_MARGIN_CALL_LIST_REQ,
  PROTO_OA_MARGIN_CALL_LIST_RES,
  PROTO_OA_MARGIN_CALL_UPDATE_REQ,
  PROTO_OA_MARGIN_CALL_UPDATE_RES,
  PROTO_OA_MARGIN_CALL_UPDATE_EVENT,
  PROTO_OA_MARGIN_CALL_TRIGGER_EVENT,
  PROTO_OA_REFRESH_TOKEN_REQ,
  PROTO_OA_REFRESH_TOKEN_RES,
];

export function read(data: Buffer): Messages | undefined {
  for (const handler of handlers) {
    const result = handler.read(data);
    if (result) {
      return result;
    }
  }
  return undefined;
}

export function write(message: Messages): Buffer | undefined {
  for (const handler of handlers) {
    const result = handler.write(message);
    if (result) {
      return result;
    }
  }
  return undefined;
}

export type Messages =
  | PROTO_MESSAGE.Type
  | ERROR_RES.Type
  | HEARTBEAT_EVENT.Type
  | PROTO_OA_APPLICATION_AUTH_REQ.Type
  | PROTO_OA_APPLICATION_AUTH_RES.Type
  | PROTO_OA_ACCOUNT_AUTH_REQ.Type
  | PROTO_OA_ACCOUNT_AUTH_RES.Type
  | PROTO_OA_VERSION_REQ.Type
  | PROTO_OA_VERSION_RES.Type
  | PROTO_OA_NEW_ORDER_REQ.Type
  | PROTO_OA_TRAILING_SL_CHANGED_EVENT.Type
  | PROTO_OA_CANCEL_ORDER_REQ.Type
  | PROTO_OA_AMEND_ORDER_REQ.Type
  | PROTO_OA_AMEND_POSITION_SLTP_REQ.Type
  | PROTO_OA_CLOSE_POSITION_REQ.Type
  | PROTO_OA_ASSET_LIST_REQ.Type
  | PROTO_OA_ASSET_LIST_RES.Type
  | PROTO_OA_SYMBOLS_LIST_REQ.Type
  | PROTO_OA_SYMBOLS_LIST_RES.Type
  | PROTO_OA_SYMBOL_BY_ID_REQ.Type
  | PROTO_OA_SYMBOL_BY_ID_RES.Type
  | PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ.Type
  | PROTO_OA_SYMBOLS_FOR_CONVERSION_RES.Type
  | PROTO_OA_SYMBOL_CHANGED_EVENT.Type
  | PROTO_OA_TRADER_REQ.Type
  | PROTO_OA_TRADER_RES.Type
  | PROTO_OA_TRADER_UPDATE_EVENT.Type
  | PROTO_OA_RECONCILE_REQ.Type
  | PROTO_OA_RECONCILE_RES.Type
  | PROTO_OA_EXECUTION_EVENT.Type
  | PROTO_OA_SUBSCRIBE_SPOTS_REQ.Type
  | PROTO_OA_SUBSCRIBE_SPOTS_RES.Type
  | PROTO_OA_UNSUBSCRIBE_SPOTS_REQ.Type
  | PROTO_OA_UNSUBSCRIBE_SPOTS_RES.Type
  | PROTO_OA_SPOT_EVENT.Type
  | PROTO_OA_ORDER_ERROR_EVENT.Type
  | PROTO_OA_DEAL_LIST_REQ.Type
  | PROTO_OA_DEAL_LIST_RES.Type
  | PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ.Type
  | PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ.Type
  | PROTO_OA_GET_TRENDBARS_REQ.Type
  | PROTO_OA_GET_TRENDBARS_RES.Type
  | PROTO_OA_EXPECTED_MARGIN_REQ.Type
  | PROTO_OA_EXPECTED_MARGIN_RES.Type
  | PROTO_OA_MARGIN_CHANGED_EVENT.Type
  | PROTO_OA_ERROR_RES.Type
  | PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ.Type
  | PROTO_OA_CASH_FLOW_HISTORY_LIST_RES.Type
  | PROTO_OA_GET_TICKDATA_REQ.Type
  | PROTO_OA_GET_TICKDATA_RES.Type
  | PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT.Type
  | PROTO_OA_CLIENT_DISCONNECT_EVENT.Type
  | PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ.Type
  | PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES.Type
  | PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ.Type
  | PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES.Type
  | PROTO_OA_ASSET_CLASS_LIST_REQ.Type
  | PROTO_OA_ASSET_CLASS_LIST_RES.Type
  | PROTO_OA_DEPTH_EVENT.Type
  | PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ.Type
  | PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES.Type
  | PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ.Type
  | PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES.Type
  | PROTO_OA_SYMBOL_CATEGORY_REQ.Type
  | PROTO_OA_SYMBOL_CATEGORY_RES.Type
  | PROTO_OA_ACCOUNT_LOGOUT_REQ.Type
  | PROTO_OA_ACCOUNT_LOGOUT_RES.Type
  | PROTO_OA_ACCOUNT_DISCONNECT_EVENT.Type
  | PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES.Type
  | PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES.Type
  | PROTO_OA_MARGIN_CALL_LIST_REQ.Type
  | PROTO_OA_MARGIN_CALL_LIST_RES.Type
  | PROTO_OA_MARGIN_CALL_UPDATE_REQ.Type
  | PROTO_OA_MARGIN_CALL_UPDATE_RES.Type
  | PROTO_OA_MARGIN_CALL_UPDATE_EVENT.Type
  | PROTO_OA_MARGIN_CALL_TRIGGER_EVENT.Type
  | PROTO_OA_REFRESH_TOKEN_REQ.Type
  | PROTO_OA_REFRESH_TOKEN_RES.Type;

export const FACTORY = {
  PROTO_MESSAGE: PROTO_MESSAGE.create,
  ERROR_RES: ERROR_RES.create,
  HEARTBEAT_EVENT: HEARTBEAT_EVENT.create,
  PROTO_OA_APPLICATION_AUTH_REQ: PROTO_OA_APPLICATION_AUTH_REQ.create,
  PROTO_OA_APPLICATION_AUTH_RES: PROTO_OA_APPLICATION_AUTH_RES.create,
  PROTO_OA_ACCOUNT_AUTH_REQ: PROTO_OA_ACCOUNT_AUTH_REQ.create,
  PROTO_OA_ACCOUNT_AUTH_RES: PROTO_OA_ACCOUNT_AUTH_RES.create,
  PROTO_OA_VERSION_REQ: PROTO_OA_VERSION_REQ.create,
  PROTO_OA_VERSION_RES: PROTO_OA_VERSION_RES.create,
  PROTO_OA_NEW_ORDER_REQ: PROTO_OA_NEW_ORDER_REQ.create,
  PROTO_OA_TRAILING_SL_CHANGED_EVENT: PROTO_OA_TRAILING_SL_CHANGED_EVENT.create,
  PROTO_OA_CANCEL_ORDER_REQ: PROTO_OA_CANCEL_ORDER_REQ.create,
  PROTO_OA_AMEND_ORDER_REQ: PROTO_OA_AMEND_ORDER_REQ.create,
  PROTO_OA_AMEND_POSITION_SLTP_REQ: PROTO_OA_AMEND_POSITION_SLTP_REQ.create,
  PROTO_OA_CLOSE_POSITION_REQ: PROTO_OA_CLOSE_POSITION_REQ.create,
  PROTO_OA_ASSET_LIST_REQ: PROTO_OA_ASSET_LIST_REQ.create,
  PROTO_OA_ASSET_LIST_RES: PROTO_OA_ASSET_LIST_RES.create,
  PROTO_OA_SYMBOLS_LIST_REQ: PROTO_OA_SYMBOLS_LIST_REQ.create,
  PROTO_OA_SYMBOLS_LIST_RES: PROTO_OA_SYMBOLS_LIST_RES.create,
  PROTO_OA_SYMBOL_BY_ID_REQ: PROTO_OA_SYMBOL_BY_ID_REQ.create,
  PROTO_OA_SYMBOL_BY_ID_RES: PROTO_OA_SYMBOL_BY_ID_RES.create,
  PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ:
    PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ.create,
  PROTO_OA_SYMBOLS_FOR_CONVERSION_RES:
    PROTO_OA_SYMBOLS_FOR_CONVERSION_RES.create,
  PROTO_OA_SYMBOL_CHANGED_EVENT: PROTO_OA_SYMBOL_CHANGED_EVENT.create,
  PROTO_OA_TRADER_REQ: PROTO_OA_TRADER_REQ.create,
  PROTO_OA_TRADER_RES: PROTO_OA_TRADER_RES.create,
  PROTO_OA_TRADER_UPDATE_EVENT: PROTO_OA_TRADER_UPDATE_EVENT.create,
  PROTO_OA_RECONCILE_REQ: PROTO_OA_RECONCILE_REQ.create,
  PROTO_OA_RECONCILE_RES: PROTO_OA_RECONCILE_RES.create,
  PROTO_OA_EXECUTION_EVENT: PROTO_OA_EXECUTION_EVENT.create,
  PROTO_OA_SUBSCRIBE_SPOTS_REQ: PROTO_OA_SUBSCRIBE_SPOTS_REQ.create,
  PROTO_OA_SUBSCRIBE_SPOTS_RES: PROTO_OA_SUBSCRIBE_SPOTS_RES.create,
  PROTO_OA_UNSUBSCRIBE_SPOTS_REQ: PROTO_OA_UNSUBSCRIBE_SPOTS_REQ.create,
  PROTO_OA_UNSUBSCRIBE_SPOTS_RES: PROTO_OA_UNSUBSCRIBE_SPOTS_RES.create,
  PROTO_OA_SPOT_EVENT: PROTO_OA_SPOT_EVENT.create,
  PROTO_OA_ORDER_ERROR_EVENT: PROTO_OA_ORDER_ERROR_EVENT.create,
  PROTO_OA_DEAL_LIST_REQ: PROTO_OA_DEAL_LIST_REQ.create,
  PROTO_OA_DEAL_LIST_RES: PROTO_OA_DEAL_LIST_RES.create,
  PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ:
    PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_REQ.create,
  PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ:
    PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ.create,
  PROTO_OA_GET_TRENDBARS_REQ: PROTO_OA_GET_TRENDBARS_REQ.create,
  PROTO_OA_GET_TRENDBARS_RES: PROTO_OA_GET_TRENDBARS_RES.create,
  PROTO_OA_EXPECTED_MARGIN_REQ: PROTO_OA_EXPECTED_MARGIN_REQ.create,
  PROTO_OA_EXPECTED_MARGIN_RES: PROTO_OA_EXPECTED_MARGIN_RES.create,
  PROTO_OA_MARGIN_CHANGED_EVENT: PROTO_OA_MARGIN_CHANGED_EVENT.create,
  PROTO_OA_ERROR_RES: PROTO_OA_ERROR_RES.create,
  PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ:
    PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ.create,
  PROTO_OA_CASH_FLOW_HISTORY_LIST_RES:
    PROTO_OA_CASH_FLOW_HISTORY_LIST_RES.create,
  PROTO_OA_GET_TICKDATA_REQ: PROTO_OA_GET_TICKDATA_REQ.create,
  PROTO_OA_GET_TICKDATA_RES: PROTO_OA_GET_TICKDATA_RES.create,
  PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT:
    PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT.create,
  PROTO_OA_CLIENT_DISCONNECT_EVENT: PROTO_OA_CLIENT_DISCONNECT_EVENT.create,
  PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ:
    PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ.create,
  PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES:
    PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES.create,
  PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ:
    PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ.create,
  PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES:
    PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES.create,
  PROTO_OA_ASSET_CLASS_LIST_REQ: PROTO_OA_ASSET_CLASS_LIST_REQ.create,
  PROTO_OA_ASSET_CLASS_LIST_RES: PROTO_OA_ASSET_CLASS_LIST_RES.create,
  PROTO_OA_DEPTH_EVENT: PROTO_OA_DEPTH_EVENT.create,
  PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ:
    PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ.create,
  PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES:
    PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES.create,
  PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ:
    PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ.create,
  PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES:
    PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES.create,
  PROTO_OA_SYMBOL_CATEGORY_REQ: PROTO_OA_SYMBOL_CATEGORY_REQ.create,
  PROTO_OA_SYMBOL_CATEGORY_RES: PROTO_OA_SYMBOL_CATEGORY_RES.create,
  PROTO_OA_ACCOUNT_LOGOUT_REQ: PROTO_OA_ACCOUNT_LOGOUT_REQ.create,
  PROTO_OA_ACCOUNT_LOGOUT_RES: PROTO_OA_ACCOUNT_LOGOUT_RES.create,
  PROTO_OA_ACCOUNT_DISCONNECT_EVENT: PROTO_OA_ACCOUNT_DISCONNECT_EVENT.create,
  PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES:
    PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES.create,
  PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES:
    PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES.create,
  PROTO_OA_MARGIN_CALL_LIST_REQ: PROTO_OA_MARGIN_CALL_LIST_REQ.create,
  PROTO_OA_MARGIN_CALL_LIST_RES: PROTO_OA_MARGIN_CALL_LIST_RES.create,
  PROTO_OA_MARGIN_CALL_UPDATE_REQ: PROTO_OA_MARGIN_CALL_UPDATE_REQ.create,
  PROTO_OA_MARGIN_CALL_UPDATE_RES: PROTO_OA_MARGIN_CALL_UPDATE_RES.create,
  PROTO_OA_MARGIN_CALL_UPDATE_EVENT: PROTO_OA_MARGIN_CALL_UPDATE_EVENT.create,
  PROTO_OA_MARGIN_CALL_TRIGGER_EVENT: PROTO_OA_MARGIN_CALL_TRIGGER_EVENT.create,
  PROTO_OA_REFRESH_TOKEN_REQ: PROTO_OA_REFRESH_TOKEN_REQ.create,
  PROTO_OA_REFRESH_TOKEN_RES: PROTO_OA_REFRESH_TOKEN_RES.create,
};
