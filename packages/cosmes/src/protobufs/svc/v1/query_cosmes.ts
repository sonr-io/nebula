// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file svc/v1/query.proto (package svc.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryOriginExistsRequest, QueryOriginExistsResponse, QueryParamsRequest, QueryParamsResponse, QueryResolveOriginRequest, QueryResolveOriginResponse } from "./query_pb.js";

const TYPE_NAME = "svc.v1.Query";

/**
 * Params queries all parameters of the module.
 *
 * @generated from rpc svc.v1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: QueryParamsRequest,
  Response: QueryParamsResponse,
} as const;

/**
 * OriginExists queries if a given origin exists.
 *
 * @generated from rpc svc.v1.Query.OriginExists
 */
export const QueryOriginExistsService = {
  typeName: TYPE_NAME,
  method: "OriginExists",
  Request: QueryOriginExistsRequest,
  Response: QueryOriginExistsResponse,
} as const;

/**
 * ResolveOrigin queries the domain of a given service and returns its record with capabilities.
 *
 * @generated from rpc svc.v1.Query.ResolveOrigin
 */
export const QueryResolveOriginService = {
  typeName: TYPE_NAME,
  method: "ResolveOrigin",
  Request: QueryResolveOriginRequest,
  Response: QueryResolveOriginResponse,
} as const;

