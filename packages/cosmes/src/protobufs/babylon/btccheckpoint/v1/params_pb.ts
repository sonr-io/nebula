// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file babylon/btccheckpoint/v1/params.proto (package babylon.btccheckpoint.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";

/**
 * Params defines the parameters for the module.
 *
 * @generated from message babylon.btccheckpoint.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * btc_confirmation_depth is the confirmation depth in BTC.
   * A block is considered irreversible only when it is at least k-deep in BTC
   * (k in research paper)
   *
   * @generated from field: uint64 btc_confirmation_depth = 1;
   */
  btcConfirmationDepth = protoInt64.zero;

  /**
   * checkpoint_finalization_timeout is the maximum time window (measured in BTC
   * blocks) between a checkpoint
   * - being submitted to BTC, and
   * - being reported back to BBN
   * If a checkpoint has not been reported back within w BTC blocks, then BBN
   * has dishonest majority and is stalling checkpoints (w in research paper)
   *
   * @generated from field: uint64 checkpoint_finalization_timeout = 2;
   */
  checkpointFinalizationTimeout = protoInt64.zero;

  /**
   * 4byte tag in hex format, required to be present in the OP_RETURN transaction
   * related to babylon
   *
   * @generated from field: string checkpoint_tag = 3;
   */
  checkpointTag = "";

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "babylon.btccheckpoint.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "btc_confirmation_depth", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "checkpoint_finalization_timeout", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "checkpoint_tag", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

