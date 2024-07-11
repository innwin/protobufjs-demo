/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const CommonProto = $root.CommonProto = (() => {

    /**
     * Namespace CommonProto.
     * @exports CommonProto
     * @namespace
     */
    const CommonProto = {};

    CommonProto.Common = (function() {

        /**
         * Namespace Common.
         * @memberof CommonProto
         * @namespace
         */
        const Common = {};

        Common.OddsValues = (function() {

            /**
             * Properties of an OddsValues.
             * @memberof CommonProto.Common
             * @interface IOddsValues
             * @property {number|null} [homeOdds] OddsValues homeOdds
             * @property {number|null} [drawOdds] OddsValues drawOdds
             * @property {number|null} [awayOdds] OddsValues awayOdds
             * @property {google.protobuf.IFloatValue|null} [handicap] OddsValues handicap
             */

            /**
             * Constructs a new OddsValues.
             * @memberof CommonProto.Common
             * @classdesc Represents an OddsValues.
             * @implements IOddsValues
             * @constructor
             * @param {CommonProto.Common.IOddsValues=} [properties] Properties to set
             */
            function OddsValues(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OddsValues homeOdds.
             * @member {number} homeOdds
             * @memberof CommonProto.Common.OddsValues
             * @instance
             */
            OddsValues.prototype.homeOdds = 0;

            /**
             * OddsValues drawOdds.
             * @member {number} drawOdds
             * @memberof CommonProto.Common.OddsValues
             * @instance
             */
            OddsValues.prototype.drawOdds = 0;

            /**
             * OddsValues awayOdds.
             * @member {number} awayOdds
             * @memberof CommonProto.Common.OddsValues
             * @instance
             */
            OddsValues.prototype.awayOdds = 0;

            /**
             * OddsValues handicap.
             * @member {google.protobuf.IFloatValue|null|undefined} handicap
             * @memberof CommonProto.Common.OddsValues
             * @instance
             */
            OddsValues.prototype.handicap = null;

            /**
             * Creates a new OddsValues instance using the specified properties.
             * @function create
             * @memberof CommonProto.Common.OddsValues
             * @static
             * @param {CommonProto.Common.IOddsValues=} [properties] Properties to set
             * @returns {CommonProto.Common.OddsValues} OddsValues instance
             */
            OddsValues.create = function create(properties) {
                return new OddsValues(properties);
            };

            /**
             * Encodes the specified OddsValues message. Does not implicitly {@link CommonProto.Common.OddsValues.verify|verify} messages.
             * @function encode
             * @memberof CommonProto.Common.OddsValues
             * @static
             * @param {CommonProto.Common.IOddsValues} message OddsValues message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OddsValues.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.homeOdds != null && Object.hasOwnProperty.call(message, "homeOdds"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.homeOdds);
                if (message.drawOdds != null && Object.hasOwnProperty.call(message, "drawOdds"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.drawOdds);
                if (message.awayOdds != null && Object.hasOwnProperty.call(message, "awayOdds"))
                    writer.uint32(/* id 3, wireType 5 =*/29).float(message.awayOdds);
                if (message.handicap != null && Object.hasOwnProperty.call(message, "handicap"))
                    $root.google.protobuf.FloatValue.encode(message.handicap, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OddsValues message, length delimited. Does not implicitly {@link CommonProto.Common.OddsValues.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CommonProto.Common.OddsValues
             * @static
             * @param {CommonProto.Common.IOddsValues} message OddsValues message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OddsValues.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OddsValues message from the specified reader or buffer.
             * @function decode
             * @memberof CommonProto.Common.OddsValues
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CommonProto.Common.OddsValues} OddsValues
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OddsValues.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonProto.Common.OddsValues();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.homeOdds = reader.float();
                            break;
                        }
                    case 2: {
                            message.drawOdds = reader.float();
                            break;
                        }
                    case 3: {
                            message.awayOdds = reader.float();
                            break;
                        }
                    case 4: {
                            message.handicap = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OddsValues message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CommonProto.Common.OddsValues
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CommonProto.Common.OddsValues} OddsValues
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OddsValues.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OddsValues message.
             * @function verify
             * @memberof CommonProto.Common.OddsValues
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OddsValues.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.homeOdds != null && message.hasOwnProperty("homeOdds"))
                    if (typeof message.homeOdds !== "number")
                        return "homeOdds: number expected";
                if (message.drawOdds != null && message.hasOwnProperty("drawOdds"))
                    if (typeof message.drawOdds !== "number")
                        return "drawOdds: number expected";
                if (message.awayOdds != null && message.hasOwnProperty("awayOdds"))
                    if (typeof message.awayOdds !== "number")
                        return "awayOdds: number expected";
                if (message.handicap != null && message.hasOwnProperty("handicap")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.handicap);
                    if (error)
                        return "handicap." + error;
                }
                return null;
            };

            /**
             * Creates an OddsValues message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CommonProto.Common.OddsValues
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CommonProto.Common.OddsValues} OddsValues
             */
            OddsValues.fromObject = function fromObject(object) {
                if (object instanceof $root.CommonProto.Common.OddsValues)
                    return object;
                let message = new $root.CommonProto.Common.OddsValues();
                if (object.homeOdds != null)
                    message.homeOdds = Number(object.homeOdds);
                if (object.drawOdds != null)
                    message.drawOdds = Number(object.drawOdds);
                if (object.awayOdds != null)
                    message.awayOdds = Number(object.awayOdds);
                if (object.handicap != null) {
                    if (typeof object.handicap !== "object")
                        throw TypeError(".CommonProto.Common.OddsValues.handicap: object expected");
                    message.handicap = $root.google.protobuf.FloatValue.fromObject(object.handicap);
                }
                return message;
            };

            /**
             * Creates a plain object from an OddsValues message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CommonProto.Common.OddsValues
             * @static
             * @param {CommonProto.Common.OddsValues} message OddsValues
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OddsValues.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.homeOdds = 0;
                    object.drawOdds = 0;
                    object.awayOdds = 0;
                    object.handicap = null;
                }
                if (message.homeOdds != null && message.hasOwnProperty("homeOdds"))
                    object.homeOdds = options.json && !isFinite(message.homeOdds) ? String(message.homeOdds) : message.homeOdds;
                if (message.drawOdds != null && message.hasOwnProperty("drawOdds"))
                    object.drawOdds = options.json && !isFinite(message.drawOdds) ? String(message.drawOdds) : message.drawOdds;
                if (message.awayOdds != null && message.hasOwnProperty("awayOdds"))
                    object.awayOdds = options.json && !isFinite(message.awayOdds) ? String(message.awayOdds) : message.awayOdds;
                if (message.handicap != null && message.hasOwnProperty("handicap"))
                    object.handicap = $root.google.protobuf.FloatValue.toObject(message.handicap, options);
                return object;
            };

            /**
             * Converts this OddsValues to JSON.
             * @function toJSON
             * @memberof CommonProto.Common.OddsValues
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OddsValues.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OddsValues
             * @function getTypeUrl
             * @memberof CommonProto.Common.OddsValues
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OddsValues.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CommonProto.Common.OddsValues";
            };

            return OddsValues;
        })();

        Common.OddsMultiValues = (function() {

            /**
             * Properties of an OddsMultiValues.
             * @memberof CommonProto.Common
             * @interface IOddsMultiValues
             * @property {google.protobuf.IFloatValue|null} [homeValue_1] OddsMultiValues homeValue_1
             * @property {google.protobuf.IFloatValue|null} [homeValue_2] OddsMultiValues homeValue_2
             * @property {google.protobuf.IFloatValue|null} [homeValue_3] OddsMultiValues homeValue_3
             * @property {google.protobuf.IFloatValue|null} [homeValue_4] OddsMultiValues homeValue_4
             * @property {google.protobuf.IFloatValue|null} [homeValue_5] OddsMultiValues homeValue_5
             * @property {google.protobuf.IFloatValue|null} [homeValue_6] OddsMultiValues homeValue_6
             * @property {google.protobuf.IFloatValue|null} [homeValue_7] OddsMultiValues homeValue_7
             * @property {google.protobuf.IFloatValue|null} [homeValue_8] OddsMultiValues homeValue_8
             * @property {google.protobuf.IFloatValue|null} [homeValue_9] OddsMultiValues homeValue_9
             * @property {google.protobuf.IFloatValue|null} [homeValue_10] OddsMultiValues homeValue_10
             * @property {google.protobuf.IFloatValue|null} [guestValue_1] OddsMultiValues guestValue_1
             * @property {google.protobuf.IFloatValue|null} [guestValue_2] OddsMultiValues guestValue_2
             * @property {google.protobuf.IFloatValue|null} [guestValue_3] OddsMultiValues guestValue_3
             * @property {google.protobuf.IFloatValue|null} [guestValue_4] OddsMultiValues guestValue_4
             * @property {google.protobuf.IFloatValue|null} [guestValue_5] OddsMultiValues guestValue_5
             * @property {google.protobuf.IFloatValue|null} [guestValue_6] OddsMultiValues guestValue_6
             * @property {google.protobuf.IFloatValue|null} [guestValue_7] OddsMultiValues guestValue_7
             * @property {google.protobuf.IFloatValue|null} [guestValue_8] OddsMultiValues guestValue_8
             * @property {google.protobuf.IFloatValue|null} [guestValue_9] OddsMultiValues guestValue_9
             * @property {google.protobuf.IFloatValue|null} [guestValue_10] OddsMultiValues guestValue_10
             * @property {google.protobuf.IFloatValue|null} [drawValue_1] OddsMultiValues drawValue_1
             * @property {google.protobuf.IFloatValue|null} [drawValue_2] OddsMultiValues drawValue_2
             * @property {google.protobuf.IFloatValue|null} [drawValue_3] OddsMultiValues drawValue_3
             * @property {google.protobuf.IFloatValue|null} [drawValue_4] OddsMultiValues drawValue_4
             * @property {google.protobuf.IFloatValue|null} [drawValue_5] OddsMultiValues drawValue_5
             * @property {google.protobuf.IFloatValue|null} [otherValue] OddsMultiValues otherValue
             */

            /**
             * Constructs a new OddsMultiValues.
             * @memberof CommonProto.Common
             * @classdesc Represents an OddsMultiValues.
             * @implements IOddsMultiValues
             * @constructor
             * @param {CommonProto.Common.IOddsMultiValues=} [properties] Properties to set
             */
            function OddsMultiValues(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OddsMultiValues homeValue_1.
             * @member {google.protobuf.IFloatValue|null|undefined} homeValue_1
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.homeValue_1 = null;

            /**
             * OddsMultiValues homeValue_2.
             * @member {google.protobuf.IFloatValue|null|undefined} homeValue_2
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.homeValue_2 = null;

            /**
             * OddsMultiValues homeValue_3.
             * @member {google.protobuf.IFloatValue|null|undefined} homeValue_3
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.homeValue_3 = null;

            /**
             * OddsMultiValues homeValue_4.
             * @member {google.protobuf.IFloatValue|null|undefined} homeValue_4
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.homeValue_4 = null;

            /**
             * OddsMultiValues homeValue_5.
             * @member {google.protobuf.IFloatValue|null|undefined} homeValue_5
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.homeValue_5 = null;

            /**
             * OddsMultiValues homeValue_6.
             * @member {google.protobuf.IFloatValue|null|undefined} homeValue_6
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.homeValue_6 = null;

            /**
             * OddsMultiValues homeValue_7.
             * @member {google.protobuf.IFloatValue|null|undefined} homeValue_7
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.homeValue_7 = null;

            /**
             * OddsMultiValues homeValue_8.
             * @member {google.protobuf.IFloatValue|null|undefined} homeValue_8
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.homeValue_8 = null;

            /**
             * OddsMultiValues homeValue_9.
             * @member {google.protobuf.IFloatValue|null|undefined} homeValue_9
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.homeValue_9 = null;

            /**
             * OddsMultiValues homeValue_10.
             * @member {google.protobuf.IFloatValue|null|undefined} homeValue_10
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.homeValue_10 = null;

            /**
             * OddsMultiValues guestValue_1.
             * @member {google.protobuf.IFloatValue|null|undefined} guestValue_1
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.guestValue_1 = null;

            /**
             * OddsMultiValues guestValue_2.
             * @member {google.protobuf.IFloatValue|null|undefined} guestValue_2
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.guestValue_2 = null;

            /**
             * OddsMultiValues guestValue_3.
             * @member {google.protobuf.IFloatValue|null|undefined} guestValue_3
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.guestValue_3 = null;

            /**
             * OddsMultiValues guestValue_4.
             * @member {google.protobuf.IFloatValue|null|undefined} guestValue_4
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.guestValue_4 = null;

            /**
             * OddsMultiValues guestValue_5.
             * @member {google.protobuf.IFloatValue|null|undefined} guestValue_5
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.guestValue_5 = null;

            /**
             * OddsMultiValues guestValue_6.
             * @member {google.protobuf.IFloatValue|null|undefined} guestValue_6
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.guestValue_6 = null;

            /**
             * OddsMultiValues guestValue_7.
             * @member {google.protobuf.IFloatValue|null|undefined} guestValue_7
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.guestValue_7 = null;

            /**
             * OddsMultiValues guestValue_8.
             * @member {google.protobuf.IFloatValue|null|undefined} guestValue_8
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.guestValue_8 = null;

            /**
             * OddsMultiValues guestValue_9.
             * @member {google.protobuf.IFloatValue|null|undefined} guestValue_9
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.guestValue_9 = null;

            /**
             * OddsMultiValues guestValue_10.
             * @member {google.protobuf.IFloatValue|null|undefined} guestValue_10
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.guestValue_10 = null;

            /**
             * OddsMultiValues drawValue_1.
             * @member {google.protobuf.IFloatValue|null|undefined} drawValue_1
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.drawValue_1 = null;

            /**
             * OddsMultiValues drawValue_2.
             * @member {google.protobuf.IFloatValue|null|undefined} drawValue_2
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.drawValue_2 = null;

            /**
             * OddsMultiValues drawValue_3.
             * @member {google.protobuf.IFloatValue|null|undefined} drawValue_3
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.drawValue_3 = null;

            /**
             * OddsMultiValues drawValue_4.
             * @member {google.protobuf.IFloatValue|null|undefined} drawValue_4
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.drawValue_4 = null;

            /**
             * OddsMultiValues drawValue_5.
             * @member {google.protobuf.IFloatValue|null|undefined} drawValue_5
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.drawValue_5 = null;

            /**
             * OddsMultiValues otherValue.
             * @member {google.protobuf.IFloatValue|null|undefined} otherValue
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             */
            OddsMultiValues.prototype.otherValue = null;

            /**
             * Creates a new OddsMultiValues instance using the specified properties.
             * @function create
             * @memberof CommonProto.Common.OddsMultiValues
             * @static
             * @param {CommonProto.Common.IOddsMultiValues=} [properties] Properties to set
             * @returns {CommonProto.Common.OddsMultiValues} OddsMultiValues instance
             */
            OddsMultiValues.create = function create(properties) {
                return new OddsMultiValues(properties);
            };

            /**
             * Encodes the specified OddsMultiValues message. Does not implicitly {@link CommonProto.Common.OddsMultiValues.verify|verify} messages.
             * @function encode
             * @memberof CommonProto.Common.OddsMultiValues
             * @static
             * @param {CommonProto.Common.IOddsMultiValues} message OddsMultiValues message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OddsMultiValues.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.homeValue_1 != null && Object.hasOwnProperty.call(message, "homeValue_1"))
                    $root.google.protobuf.FloatValue.encode(message.homeValue_1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.homeValue_2 != null && Object.hasOwnProperty.call(message, "homeValue_2"))
                    $root.google.protobuf.FloatValue.encode(message.homeValue_2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.homeValue_3 != null && Object.hasOwnProperty.call(message, "homeValue_3"))
                    $root.google.protobuf.FloatValue.encode(message.homeValue_3, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.homeValue_4 != null && Object.hasOwnProperty.call(message, "homeValue_4"))
                    $root.google.protobuf.FloatValue.encode(message.homeValue_4, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.homeValue_5 != null && Object.hasOwnProperty.call(message, "homeValue_5"))
                    $root.google.protobuf.FloatValue.encode(message.homeValue_5, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.homeValue_6 != null && Object.hasOwnProperty.call(message, "homeValue_6"))
                    $root.google.protobuf.FloatValue.encode(message.homeValue_6, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.homeValue_7 != null && Object.hasOwnProperty.call(message, "homeValue_7"))
                    $root.google.protobuf.FloatValue.encode(message.homeValue_7, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.homeValue_8 != null && Object.hasOwnProperty.call(message, "homeValue_8"))
                    $root.google.protobuf.FloatValue.encode(message.homeValue_8, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.homeValue_9 != null && Object.hasOwnProperty.call(message, "homeValue_9"))
                    $root.google.protobuf.FloatValue.encode(message.homeValue_9, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.homeValue_10 != null && Object.hasOwnProperty.call(message, "homeValue_10"))
                    $root.google.protobuf.FloatValue.encode(message.homeValue_10, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                if (message.guestValue_1 != null && Object.hasOwnProperty.call(message, "guestValue_1"))
                    $root.google.protobuf.FloatValue.encode(message.guestValue_1, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.guestValue_2 != null && Object.hasOwnProperty.call(message, "guestValue_2"))
                    $root.google.protobuf.FloatValue.encode(message.guestValue_2, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                if (message.guestValue_3 != null && Object.hasOwnProperty.call(message, "guestValue_3"))
                    $root.google.protobuf.FloatValue.encode(message.guestValue_3, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                if (message.guestValue_4 != null && Object.hasOwnProperty.call(message, "guestValue_4"))
                    $root.google.protobuf.FloatValue.encode(message.guestValue_4, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                if (message.guestValue_5 != null && Object.hasOwnProperty.call(message, "guestValue_5"))
                    $root.google.protobuf.FloatValue.encode(message.guestValue_5, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                if (message.guestValue_6 != null && Object.hasOwnProperty.call(message, "guestValue_6"))
                    $root.google.protobuf.FloatValue.encode(message.guestValue_6, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                if (message.guestValue_7 != null && Object.hasOwnProperty.call(message, "guestValue_7"))
                    $root.google.protobuf.FloatValue.encode(message.guestValue_7, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
                if (message.guestValue_8 != null && Object.hasOwnProperty.call(message, "guestValue_8"))
                    $root.google.protobuf.FloatValue.encode(message.guestValue_8, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
                if (message.guestValue_9 != null && Object.hasOwnProperty.call(message, "guestValue_9"))
                    $root.google.protobuf.FloatValue.encode(message.guestValue_9, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
                if (message.guestValue_10 != null && Object.hasOwnProperty.call(message, "guestValue_10"))
                    $root.google.protobuf.FloatValue.encode(message.guestValue_10, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
                if (message.drawValue_1 != null && Object.hasOwnProperty.call(message, "drawValue_1"))
                    $root.google.protobuf.FloatValue.encode(message.drawValue_1, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
                if (message.drawValue_2 != null && Object.hasOwnProperty.call(message, "drawValue_2"))
                    $root.google.protobuf.FloatValue.encode(message.drawValue_2, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
                if (message.drawValue_3 != null && Object.hasOwnProperty.call(message, "drawValue_3"))
                    $root.google.protobuf.FloatValue.encode(message.drawValue_3, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
                if (message.drawValue_4 != null && Object.hasOwnProperty.call(message, "drawValue_4"))
                    $root.google.protobuf.FloatValue.encode(message.drawValue_4, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
                if (message.drawValue_5 != null && Object.hasOwnProperty.call(message, "drawValue_5"))
                    $root.google.protobuf.FloatValue.encode(message.drawValue_5, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
                if (message.otherValue != null && Object.hasOwnProperty.call(message, "otherValue"))
                    $root.google.protobuf.FloatValue.encode(message.otherValue, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified OddsMultiValues message, length delimited. Does not implicitly {@link CommonProto.Common.OddsMultiValues.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CommonProto.Common.OddsMultiValues
             * @static
             * @param {CommonProto.Common.IOddsMultiValues} message OddsMultiValues message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OddsMultiValues.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OddsMultiValues message from the specified reader or buffer.
             * @function decode
             * @memberof CommonProto.Common.OddsMultiValues
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CommonProto.Common.OddsMultiValues} OddsMultiValues
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OddsMultiValues.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonProto.Common.OddsMultiValues();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.homeValue_1 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.homeValue_2 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.homeValue_3 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.homeValue_4 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.homeValue_5 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.homeValue_6 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.homeValue_7 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.homeValue_8 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            message.homeValue_9 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 10: {
                            message.homeValue_10 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 11: {
                            message.guestValue_1 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 12: {
                            message.guestValue_2 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 13: {
                            message.guestValue_3 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 14: {
                            message.guestValue_4 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 15: {
                            message.guestValue_5 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 16: {
                            message.guestValue_6 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 17: {
                            message.guestValue_7 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 18: {
                            message.guestValue_8 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 19: {
                            message.guestValue_9 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 20: {
                            message.guestValue_10 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 21: {
                            message.drawValue_1 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 22: {
                            message.drawValue_2 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 23: {
                            message.drawValue_3 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 24: {
                            message.drawValue_4 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 25: {
                            message.drawValue_5 = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    case 26: {
                            message.otherValue = $root.google.protobuf.FloatValue.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OddsMultiValues message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CommonProto.Common.OddsMultiValues
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CommonProto.Common.OddsMultiValues} OddsMultiValues
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OddsMultiValues.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OddsMultiValues message.
             * @function verify
             * @memberof CommonProto.Common.OddsMultiValues
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OddsMultiValues.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.homeValue_1 != null && message.hasOwnProperty("homeValue_1")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.homeValue_1);
                    if (error)
                        return "homeValue_1." + error;
                }
                if (message.homeValue_2 != null && message.hasOwnProperty("homeValue_2")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.homeValue_2);
                    if (error)
                        return "homeValue_2." + error;
                }
                if (message.homeValue_3 != null && message.hasOwnProperty("homeValue_3")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.homeValue_3);
                    if (error)
                        return "homeValue_3." + error;
                }
                if (message.homeValue_4 != null && message.hasOwnProperty("homeValue_4")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.homeValue_4);
                    if (error)
                        return "homeValue_4." + error;
                }
                if (message.homeValue_5 != null && message.hasOwnProperty("homeValue_5")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.homeValue_5);
                    if (error)
                        return "homeValue_5." + error;
                }
                if (message.homeValue_6 != null && message.hasOwnProperty("homeValue_6")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.homeValue_6);
                    if (error)
                        return "homeValue_6." + error;
                }
                if (message.homeValue_7 != null && message.hasOwnProperty("homeValue_7")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.homeValue_7);
                    if (error)
                        return "homeValue_7." + error;
                }
                if (message.homeValue_8 != null && message.hasOwnProperty("homeValue_8")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.homeValue_8);
                    if (error)
                        return "homeValue_8." + error;
                }
                if (message.homeValue_9 != null && message.hasOwnProperty("homeValue_9")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.homeValue_9);
                    if (error)
                        return "homeValue_9." + error;
                }
                if (message.homeValue_10 != null && message.hasOwnProperty("homeValue_10")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.homeValue_10);
                    if (error)
                        return "homeValue_10." + error;
                }
                if (message.guestValue_1 != null && message.hasOwnProperty("guestValue_1")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.guestValue_1);
                    if (error)
                        return "guestValue_1." + error;
                }
                if (message.guestValue_2 != null && message.hasOwnProperty("guestValue_2")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.guestValue_2);
                    if (error)
                        return "guestValue_2." + error;
                }
                if (message.guestValue_3 != null && message.hasOwnProperty("guestValue_3")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.guestValue_3);
                    if (error)
                        return "guestValue_3." + error;
                }
                if (message.guestValue_4 != null && message.hasOwnProperty("guestValue_4")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.guestValue_4);
                    if (error)
                        return "guestValue_4." + error;
                }
                if (message.guestValue_5 != null && message.hasOwnProperty("guestValue_5")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.guestValue_5);
                    if (error)
                        return "guestValue_5." + error;
                }
                if (message.guestValue_6 != null && message.hasOwnProperty("guestValue_6")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.guestValue_6);
                    if (error)
                        return "guestValue_6." + error;
                }
                if (message.guestValue_7 != null && message.hasOwnProperty("guestValue_7")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.guestValue_7);
                    if (error)
                        return "guestValue_7." + error;
                }
                if (message.guestValue_8 != null && message.hasOwnProperty("guestValue_8")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.guestValue_8);
                    if (error)
                        return "guestValue_8." + error;
                }
                if (message.guestValue_9 != null && message.hasOwnProperty("guestValue_9")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.guestValue_9);
                    if (error)
                        return "guestValue_9." + error;
                }
                if (message.guestValue_10 != null && message.hasOwnProperty("guestValue_10")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.guestValue_10);
                    if (error)
                        return "guestValue_10." + error;
                }
                if (message.drawValue_1 != null && message.hasOwnProperty("drawValue_1")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.drawValue_1);
                    if (error)
                        return "drawValue_1." + error;
                }
                if (message.drawValue_2 != null && message.hasOwnProperty("drawValue_2")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.drawValue_2);
                    if (error)
                        return "drawValue_2." + error;
                }
                if (message.drawValue_3 != null && message.hasOwnProperty("drawValue_3")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.drawValue_3);
                    if (error)
                        return "drawValue_3." + error;
                }
                if (message.drawValue_4 != null && message.hasOwnProperty("drawValue_4")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.drawValue_4);
                    if (error)
                        return "drawValue_4." + error;
                }
                if (message.drawValue_5 != null && message.hasOwnProperty("drawValue_5")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.drawValue_5);
                    if (error)
                        return "drawValue_5." + error;
                }
                if (message.otherValue != null && message.hasOwnProperty("otherValue")) {
                    let error = $root.google.protobuf.FloatValue.verify(message.otherValue);
                    if (error)
                        return "otherValue." + error;
                }
                return null;
            };

            /**
             * Creates an OddsMultiValues message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CommonProto.Common.OddsMultiValues
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CommonProto.Common.OddsMultiValues} OddsMultiValues
             */
            OddsMultiValues.fromObject = function fromObject(object) {
                if (object instanceof $root.CommonProto.Common.OddsMultiValues)
                    return object;
                let message = new $root.CommonProto.Common.OddsMultiValues();
                if (object.homeValue_1 != null) {
                    if (typeof object.homeValue_1 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.homeValue_1: object expected");
                    message.homeValue_1 = $root.google.protobuf.FloatValue.fromObject(object.homeValue_1);
                }
                if (object.homeValue_2 != null) {
                    if (typeof object.homeValue_2 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.homeValue_2: object expected");
                    message.homeValue_2 = $root.google.protobuf.FloatValue.fromObject(object.homeValue_2);
                }
                if (object.homeValue_3 != null) {
                    if (typeof object.homeValue_3 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.homeValue_3: object expected");
                    message.homeValue_3 = $root.google.protobuf.FloatValue.fromObject(object.homeValue_3);
                }
                if (object.homeValue_4 != null) {
                    if (typeof object.homeValue_4 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.homeValue_4: object expected");
                    message.homeValue_4 = $root.google.protobuf.FloatValue.fromObject(object.homeValue_4);
                }
                if (object.homeValue_5 != null) {
                    if (typeof object.homeValue_5 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.homeValue_5: object expected");
                    message.homeValue_5 = $root.google.protobuf.FloatValue.fromObject(object.homeValue_5);
                }
                if (object.homeValue_6 != null) {
                    if (typeof object.homeValue_6 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.homeValue_6: object expected");
                    message.homeValue_6 = $root.google.protobuf.FloatValue.fromObject(object.homeValue_6);
                }
                if (object.homeValue_7 != null) {
                    if (typeof object.homeValue_7 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.homeValue_7: object expected");
                    message.homeValue_7 = $root.google.protobuf.FloatValue.fromObject(object.homeValue_7);
                }
                if (object.homeValue_8 != null) {
                    if (typeof object.homeValue_8 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.homeValue_8: object expected");
                    message.homeValue_8 = $root.google.protobuf.FloatValue.fromObject(object.homeValue_8);
                }
                if (object.homeValue_9 != null) {
                    if (typeof object.homeValue_9 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.homeValue_9: object expected");
                    message.homeValue_9 = $root.google.protobuf.FloatValue.fromObject(object.homeValue_9);
                }
                if (object.homeValue_10 != null) {
                    if (typeof object.homeValue_10 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.homeValue_10: object expected");
                    message.homeValue_10 = $root.google.protobuf.FloatValue.fromObject(object.homeValue_10);
                }
                if (object.guestValue_1 != null) {
                    if (typeof object.guestValue_1 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.guestValue_1: object expected");
                    message.guestValue_1 = $root.google.protobuf.FloatValue.fromObject(object.guestValue_1);
                }
                if (object.guestValue_2 != null) {
                    if (typeof object.guestValue_2 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.guestValue_2: object expected");
                    message.guestValue_2 = $root.google.protobuf.FloatValue.fromObject(object.guestValue_2);
                }
                if (object.guestValue_3 != null) {
                    if (typeof object.guestValue_3 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.guestValue_3: object expected");
                    message.guestValue_3 = $root.google.protobuf.FloatValue.fromObject(object.guestValue_3);
                }
                if (object.guestValue_4 != null) {
                    if (typeof object.guestValue_4 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.guestValue_4: object expected");
                    message.guestValue_4 = $root.google.protobuf.FloatValue.fromObject(object.guestValue_4);
                }
                if (object.guestValue_5 != null) {
                    if (typeof object.guestValue_5 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.guestValue_5: object expected");
                    message.guestValue_5 = $root.google.protobuf.FloatValue.fromObject(object.guestValue_5);
                }
                if (object.guestValue_6 != null) {
                    if (typeof object.guestValue_6 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.guestValue_6: object expected");
                    message.guestValue_6 = $root.google.protobuf.FloatValue.fromObject(object.guestValue_6);
                }
                if (object.guestValue_7 != null) {
                    if (typeof object.guestValue_7 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.guestValue_7: object expected");
                    message.guestValue_7 = $root.google.protobuf.FloatValue.fromObject(object.guestValue_7);
                }
                if (object.guestValue_8 != null) {
                    if (typeof object.guestValue_8 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.guestValue_8: object expected");
                    message.guestValue_8 = $root.google.protobuf.FloatValue.fromObject(object.guestValue_8);
                }
                if (object.guestValue_9 != null) {
                    if (typeof object.guestValue_9 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.guestValue_9: object expected");
                    message.guestValue_9 = $root.google.protobuf.FloatValue.fromObject(object.guestValue_9);
                }
                if (object.guestValue_10 != null) {
                    if (typeof object.guestValue_10 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.guestValue_10: object expected");
                    message.guestValue_10 = $root.google.protobuf.FloatValue.fromObject(object.guestValue_10);
                }
                if (object.drawValue_1 != null) {
                    if (typeof object.drawValue_1 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.drawValue_1: object expected");
                    message.drawValue_1 = $root.google.protobuf.FloatValue.fromObject(object.drawValue_1);
                }
                if (object.drawValue_2 != null) {
                    if (typeof object.drawValue_2 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.drawValue_2: object expected");
                    message.drawValue_2 = $root.google.protobuf.FloatValue.fromObject(object.drawValue_2);
                }
                if (object.drawValue_3 != null) {
                    if (typeof object.drawValue_3 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.drawValue_3: object expected");
                    message.drawValue_3 = $root.google.protobuf.FloatValue.fromObject(object.drawValue_3);
                }
                if (object.drawValue_4 != null) {
                    if (typeof object.drawValue_4 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.drawValue_4: object expected");
                    message.drawValue_4 = $root.google.protobuf.FloatValue.fromObject(object.drawValue_4);
                }
                if (object.drawValue_5 != null) {
                    if (typeof object.drawValue_5 !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.drawValue_5: object expected");
                    message.drawValue_5 = $root.google.protobuf.FloatValue.fromObject(object.drawValue_5);
                }
                if (object.otherValue != null) {
                    if (typeof object.otherValue !== "object")
                        throw TypeError(".CommonProto.Common.OddsMultiValues.otherValue: object expected");
                    message.otherValue = $root.google.protobuf.FloatValue.fromObject(object.otherValue);
                }
                return message;
            };

            /**
             * Creates a plain object from an OddsMultiValues message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CommonProto.Common.OddsMultiValues
             * @static
             * @param {CommonProto.Common.OddsMultiValues} message OddsMultiValues
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OddsMultiValues.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.homeValue_1 = null;
                    object.homeValue_2 = null;
                    object.homeValue_3 = null;
                    object.homeValue_4 = null;
                    object.homeValue_5 = null;
                    object.homeValue_6 = null;
                    object.homeValue_7 = null;
                    object.homeValue_8 = null;
                    object.homeValue_9 = null;
                    object.homeValue_10 = null;
                    object.guestValue_1 = null;
                    object.guestValue_2 = null;
                    object.guestValue_3 = null;
                    object.guestValue_4 = null;
                    object.guestValue_5 = null;
                    object.guestValue_6 = null;
                    object.guestValue_7 = null;
                    object.guestValue_8 = null;
                    object.guestValue_9 = null;
                    object.guestValue_10 = null;
                    object.drawValue_1 = null;
                    object.drawValue_2 = null;
                    object.drawValue_3 = null;
                    object.drawValue_4 = null;
                    object.drawValue_5 = null;
                    object.otherValue = null;
                }
                if (message.homeValue_1 != null && message.hasOwnProperty("homeValue_1"))
                    object.homeValue_1 = $root.google.protobuf.FloatValue.toObject(message.homeValue_1, options);
                if (message.homeValue_2 != null && message.hasOwnProperty("homeValue_2"))
                    object.homeValue_2 = $root.google.protobuf.FloatValue.toObject(message.homeValue_2, options);
                if (message.homeValue_3 != null && message.hasOwnProperty("homeValue_3"))
                    object.homeValue_3 = $root.google.protobuf.FloatValue.toObject(message.homeValue_3, options);
                if (message.homeValue_4 != null && message.hasOwnProperty("homeValue_4"))
                    object.homeValue_4 = $root.google.protobuf.FloatValue.toObject(message.homeValue_4, options);
                if (message.homeValue_5 != null && message.hasOwnProperty("homeValue_5"))
                    object.homeValue_5 = $root.google.protobuf.FloatValue.toObject(message.homeValue_5, options);
                if (message.homeValue_6 != null && message.hasOwnProperty("homeValue_6"))
                    object.homeValue_6 = $root.google.protobuf.FloatValue.toObject(message.homeValue_6, options);
                if (message.homeValue_7 != null && message.hasOwnProperty("homeValue_7"))
                    object.homeValue_7 = $root.google.protobuf.FloatValue.toObject(message.homeValue_7, options);
                if (message.homeValue_8 != null && message.hasOwnProperty("homeValue_8"))
                    object.homeValue_8 = $root.google.protobuf.FloatValue.toObject(message.homeValue_8, options);
                if (message.homeValue_9 != null && message.hasOwnProperty("homeValue_9"))
                    object.homeValue_9 = $root.google.protobuf.FloatValue.toObject(message.homeValue_9, options);
                if (message.homeValue_10 != null && message.hasOwnProperty("homeValue_10"))
                    object.homeValue_10 = $root.google.protobuf.FloatValue.toObject(message.homeValue_10, options);
                if (message.guestValue_1 != null && message.hasOwnProperty("guestValue_1"))
                    object.guestValue_1 = $root.google.protobuf.FloatValue.toObject(message.guestValue_1, options);
                if (message.guestValue_2 != null && message.hasOwnProperty("guestValue_2"))
                    object.guestValue_2 = $root.google.protobuf.FloatValue.toObject(message.guestValue_2, options);
                if (message.guestValue_3 != null && message.hasOwnProperty("guestValue_3"))
                    object.guestValue_3 = $root.google.protobuf.FloatValue.toObject(message.guestValue_3, options);
                if (message.guestValue_4 != null && message.hasOwnProperty("guestValue_4"))
                    object.guestValue_4 = $root.google.protobuf.FloatValue.toObject(message.guestValue_4, options);
                if (message.guestValue_5 != null && message.hasOwnProperty("guestValue_5"))
                    object.guestValue_5 = $root.google.protobuf.FloatValue.toObject(message.guestValue_5, options);
                if (message.guestValue_6 != null && message.hasOwnProperty("guestValue_6"))
                    object.guestValue_6 = $root.google.protobuf.FloatValue.toObject(message.guestValue_6, options);
                if (message.guestValue_7 != null && message.hasOwnProperty("guestValue_7"))
                    object.guestValue_7 = $root.google.protobuf.FloatValue.toObject(message.guestValue_7, options);
                if (message.guestValue_8 != null && message.hasOwnProperty("guestValue_8"))
                    object.guestValue_8 = $root.google.protobuf.FloatValue.toObject(message.guestValue_8, options);
                if (message.guestValue_9 != null && message.hasOwnProperty("guestValue_9"))
                    object.guestValue_9 = $root.google.protobuf.FloatValue.toObject(message.guestValue_9, options);
                if (message.guestValue_10 != null && message.hasOwnProperty("guestValue_10"))
                    object.guestValue_10 = $root.google.protobuf.FloatValue.toObject(message.guestValue_10, options);
                if (message.drawValue_1 != null && message.hasOwnProperty("drawValue_1"))
                    object.drawValue_1 = $root.google.protobuf.FloatValue.toObject(message.drawValue_1, options);
                if (message.drawValue_2 != null && message.hasOwnProperty("drawValue_2"))
                    object.drawValue_2 = $root.google.protobuf.FloatValue.toObject(message.drawValue_2, options);
                if (message.drawValue_3 != null && message.hasOwnProperty("drawValue_3"))
                    object.drawValue_3 = $root.google.protobuf.FloatValue.toObject(message.drawValue_3, options);
                if (message.drawValue_4 != null && message.hasOwnProperty("drawValue_4"))
                    object.drawValue_4 = $root.google.protobuf.FloatValue.toObject(message.drawValue_4, options);
                if (message.drawValue_5 != null && message.hasOwnProperty("drawValue_5"))
                    object.drawValue_5 = $root.google.protobuf.FloatValue.toObject(message.drawValue_5, options);
                if (message.otherValue != null && message.hasOwnProperty("otherValue"))
                    object.otherValue = $root.google.protobuf.FloatValue.toObject(message.otherValue, options);
                return object;
            };

            /**
             * Converts this OddsMultiValues to JSON.
             * @function toJSON
             * @memberof CommonProto.Common.OddsMultiValues
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OddsMultiValues.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for OddsMultiValues
             * @function getTypeUrl
             * @memberof CommonProto.Common.OddsMultiValues
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            OddsMultiValues.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/CommonProto.Common.OddsMultiValues";
            };

            return OddsMultiValues;
        })();

        return Common;
    })();

    return CommonProto;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.DoubleValue = (function() {

            /**
             * Properties of a DoubleValue.
             * @memberof google.protobuf
             * @interface IDoubleValue
             * @property {number|null} [value] DoubleValue value
             */

            /**
             * Constructs a new DoubleValue.
             * @memberof google.protobuf
             * @classdesc Represents a DoubleValue.
             * @implements IDoubleValue
             * @constructor
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             */
            function DoubleValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DoubleValue value.
             * @member {number} value
             * @memberof google.protobuf.DoubleValue
             * @instance
             */
            DoubleValue.prototype.value = 0;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
             * @returns {google.protobuf.DoubleValue} DoubleValue instance
             */
            DoubleValue.create = function create(properties) {
                return new DoubleValue(properties);
            };

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                return writer;
            };

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.double();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.DoubleValue} DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DoubleValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DoubleValue message.
             * @function verify
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DoubleValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.DoubleValue} DoubleValue
             */
            DoubleValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.DoubleValue)
                    return object;
                let message = new $root.google.protobuf.DoubleValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {google.protobuf.DoubleValue} message DoubleValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DoubleValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this DoubleValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.DoubleValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DoubleValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DoubleValue
             * @function getTypeUrl
             * @memberof google.protobuf.DoubleValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DoubleValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.DoubleValue";
            };

            return DoubleValue;
        })();

        protobuf.FloatValue = (function() {

            /**
             * Properties of a FloatValue.
             * @memberof google.protobuf
             * @interface IFloatValue
             * @property {number|null} [value] FloatValue value
             */

            /**
             * Constructs a new FloatValue.
             * @memberof google.protobuf
             * @classdesc Represents a FloatValue.
             * @implements IFloatValue
             * @constructor
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             */
            function FloatValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * FloatValue value.
             * @member {number} value
             * @memberof google.protobuf.FloatValue
             * @instance
             */
            FloatValue.prototype.value = 0;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue=} [properties] Properties to set
             * @returns {google.protobuf.FloatValue} FloatValue instance
             */
            FloatValue.create = function create(properties) {
                return new FloatValue(properties);
            };

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                return writer;
            };

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            FloatValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.float();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.FloatValue} FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            FloatValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a FloatValue message.
             * @function verify
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            FloatValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "number")
                        return "value: number expected";
                return null;
            };

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.FloatValue} FloatValue
             */
            FloatValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.FloatValue)
                    return object;
                let message = new $root.google.protobuf.FloatValue();
                if (object.value != null)
                    message.value = Number(object.value);
                return message;
            };

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {google.protobuf.FloatValue} message FloatValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            FloatValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                return object;
            };

            /**
             * Converts this FloatValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.FloatValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            FloatValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for FloatValue
             * @function getTypeUrl
             * @memberof google.protobuf.FloatValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FloatValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.FloatValue";
            };

            return FloatValue;
        })();

        protobuf.Int64Value = (function() {

            /**
             * Properties of an Int64Value.
             * @memberof google.protobuf
             * @interface IInt64Value
             * @property {number|Long|null} [value] Int64Value value
             */

            /**
             * Constructs a new Int64Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int64Value.
             * @implements IInt64Value
             * @constructor
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             */
            function Int64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.Int64Value
             * @instance
             */
            Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.Int64Value} Int64Value instance
             */
            Int64Value.create = function create(properties) {
                return new Int64Value(properties);
            };

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.int64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int64Value} Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int64Value message.
             * @function verify
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int64Value} Int64Value
             */
            Int64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int64Value)
                    return object;
                let message = new $root.google.protobuf.Int64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {google.protobuf.Int64Value} message Int64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                return object;
            };

            /**
             * Converts this Int64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Int64Value
             * @function getTypeUrl
             * @memberof google.protobuf.Int64Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Int64Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Int64Value";
            };

            return Int64Value;
        })();

        protobuf.UInt64Value = (function() {

            /**
             * Properties of a UInt64Value.
             * @memberof google.protobuf
             * @interface IUInt64Value
             * @property {number|Long|null} [value] UInt64Value value
             */

            /**
             * Constructs a new UInt64Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt64Value.
             * @implements IUInt64Value
             * @constructor
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             */
            function UInt64Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt64Value value.
             * @member {number|Long} value
             * @memberof google.protobuf.UInt64Value
             * @instance
             */
            UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt64Value} UInt64Value instance
             */
            UInt64Value.create = function create(properties) {
                return new UInt64Value(properties);
            };

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt64Value} UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt64Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt64Value message.
             * @function verify
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt64Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                        return "value: integer|Long expected";
                return null;
            };

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt64Value} UInt64Value
             */
            UInt64Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt64Value)
                    return object;
                let message = new $root.google.protobuf.UInt64Value();
                if (object.value != null)
                    if ($util.Long)
                        (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                    else if (typeof object.value === "string")
                        message.value = parseInt(object.value, 10);
                    else if (typeof object.value === "number")
                        message.value = object.value;
                    else if (typeof object.value === "object")
                        message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {google.protobuf.UInt64Value} message UInt64Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt64Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.value = options.longs === String ? "0" : 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value === "number")
                        object.value = options.longs === String ? String(message.value) : message.value;
                    else
                        object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                return object;
            };

            /**
             * Converts this UInt64Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt64Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt64Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UInt64Value
             * @function getTypeUrl
             * @memberof google.protobuf.UInt64Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UInt64Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UInt64Value";
            };

            return UInt64Value;
        })();

        protobuf.Int32Value = (function() {

            /**
             * Properties of an Int32Value.
             * @memberof google.protobuf
             * @interface IInt32Value
             * @property {number|null} [value] Int32Value value
             */

            /**
             * Constructs a new Int32Value.
             * @memberof google.protobuf
             * @classdesc Represents an Int32Value.
             * @implements IInt32Value
             * @constructor
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             */
            function Int32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Int32Value value.
             * @member {number} value
             * @memberof google.protobuf.Int32Value
             * @instance
             */
            Int32Value.prototype.value = 0;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.Int32Value} Int32Value instance
             */
            Int32Value.create = function create(properties) {
                return new Int32Value(properties);
            };

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                return writer;
            };

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Int32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Int32Value} Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Int32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Int32Value message.
             * @function verify
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Int32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Int32Value} Int32Value
             */
            Int32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Int32Value)
                    return object;
                let message = new $root.google.protobuf.Int32Value();
                if (object.value != null)
                    message.value = object.value | 0;
                return message;
            };

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {google.protobuf.Int32Value} message Int32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Int32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this Int32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.Int32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Int32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Int32Value
             * @function getTypeUrl
             * @memberof google.protobuf.Int32Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Int32Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.Int32Value";
            };

            return Int32Value;
        })();

        protobuf.UInt32Value = (function() {

            /**
             * Properties of a UInt32Value.
             * @memberof google.protobuf
             * @interface IUInt32Value
             * @property {number|null} [value] UInt32Value value
             */

            /**
             * Constructs a new UInt32Value.
             * @memberof google.protobuf
             * @classdesc Represents a UInt32Value.
             * @implements IUInt32Value
             * @constructor
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             */
            function UInt32Value(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UInt32Value value.
             * @member {number} value
             * @memberof google.protobuf.UInt32Value
             * @instance
             */
            UInt32Value.prototype.value = 0;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @function create
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
             * @returns {google.protobuf.UInt32Value} UInt32Value instance
             */
            UInt32Value.create = function create(properties) {
                return new UInt32Value(properties);
            };

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                return writer;
            };

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.UInt32Value} UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UInt32Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UInt32Value message.
             * @function verify
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UInt32Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isInteger(message.value))
                        return "value: integer expected";
                return null;
            };

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.UInt32Value} UInt32Value
             */
            UInt32Value.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.UInt32Value)
                    return object;
                let message = new $root.google.protobuf.UInt32Value();
                if (object.value != null)
                    message.value = object.value >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {google.protobuf.UInt32Value} message UInt32Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UInt32Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = 0;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this UInt32Value to JSON.
             * @function toJSON
             * @memberof google.protobuf.UInt32Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UInt32Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UInt32Value
             * @function getTypeUrl
             * @memberof google.protobuf.UInt32Value
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UInt32Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.UInt32Value";
            };

            return UInt32Value;
        })();

        protobuf.BoolValue = (function() {

            /**
             * Properties of a BoolValue.
             * @memberof google.protobuf
             * @interface IBoolValue
             * @property {boolean|null} [value] BoolValue value
             */

            /**
             * Constructs a new BoolValue.
             * @memberof google.protobuf
             * @classdesc Represents a BoolValue.
             * @implements IBoolValue
             * @constructor
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             */
            function BoolValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BoolValue value.
             * @member {boolean} value
             * @memberof google.protobuf.BoolValue
             * @instance
             */
            BoolValue.prototype.value = false;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue=} [properties] Properties to set
             * @returns {google.protobuf.BoolValue} BoolValue instance
             */
            BoolValue.create = function create(properties) {
                return new BoolValue(properties);
            };

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                return writer;
            };

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BoolValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BoolValue} BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BoolValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BoolValue message.
             * @function verify
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BoolValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "boolean")
                        return "value: boolean expected";
                return null;
            };

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BoolValue} BoolValue
             */
            BoolValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BoolValue)
                    return object;
                let message = new $root.google.protobuf.BoolValue();
                if (object.value != null)
                    message.value = Boolean(object.value);
                return message;
            };

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {google.protobuf.BoolValue} message BoolValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BoolValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = false;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this BoolValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BoolValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BoolValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BoolValue
             * @function getTypeUrl
             * @memberof google.protobuf.BoolValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BoolValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.BoolValue";
            };

            return BoolValue;
        })();

        protobuf.StringValue = (function() {

            /**
             * Properties of a StringValue.
             * @memberof google.protobuf
             * @interface IStringValue
             * @property {string|null} [value] StringValue value
             */

            /**
             * Constructs a new StringValue.
             * @memberof google.protobuf
             * @classdesc Represents a StringValue.
             * @implements IStringValue
             * @constructor
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             */
            function StringValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StringValue value.
             * @member {string} value
             * @memberof google.protobuf.StringValue
             * @instance
             */
            StringValue.prototype.value = "";

            /**
             * Creates a new StringValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue=} [properties] Properties to set
             * @returns {google.protobuf.StringValue} StringValue instance
             */
            StringValue.create = function create(properties) {
                return new StringValue(properties);
            };

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                return writer;
            };

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StringValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.StringValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.StringValue} StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StringValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StringValue message.
             * @function verify
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StringValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!$util.isString(message.value))
                        return "value: string expected";
                return null;
            };

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.StringValue} StringValue
             */
            StringValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.StringValue)
                    return object;
                let message = new $root.google.protobuf.StringValue();
                if (object.value != null)
                    message.value = String(object.value);
                return message;
            };

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.StringValue
             * @static
             * @param {google.protobuf.StringValue} message StringValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StringValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.value = "";
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this StringValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.StringValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StringValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StringValue
             * @function getTypeUrl
             * @memberof google.protobuf.StringValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StringValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.StringValue";
            };

            return StringValue;
        })();

        protobuf.BytesValue = (function() {

            /**
             * Properties of a BytesValue.
             * @memberof google.protobuf
             * @interface IBytesValue
             * @property {Uint8Array|null} [value] BytesValue value
             */

            /**
             * Constructs a new BytesValue.
             * @memberof google.protobuf
             * @classdesc Represents a BytesValue.
             * @implements IBytesValue
             * @constructor
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             */
            function BytesValue(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * BytesValue value.
             * @member {Uint8Array} value
             * @memberof google.protobuf.BytesValue
             * @instance
             */
            BytesValue.prototype.value = $util.newBuffer([]);

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @function create
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue=} [properties] Properties to set
             * @returns {google.protobuf.BytesValue} BytesValue instance
             */
            BytesValue.create = function create(properties) {
                return new BytesValue(properties);
            };

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                return writer;
            };

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.value = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.BytesValue} BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BytesValue.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BytesValue message.
             * @function verify
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BytesValue.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.value != null && message.hasOwnProperty("value"))
                    if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                        return "value: buffer expected";
                return null;
            };

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.BytesValue} BytesValue
             */
            BytesValue.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.BytesValue)
                    return object;
                let message = new $root.google.protobuf.BytesValue();
                if (object.value != null)
                    if (typeof object.value === "string")
                        $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                    else if (object.value.length >= 0)
                        message.value = object.value;
                return message;
            };

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {google.protobuf.BytesValue} message BytesValue
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BytesValue.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if (options.bytes === String)
                        object.value = "";
                    else {
                        object.value = [];
                        if (options.bytes !== Array)
                            object.value = $util.newBuffer(object.value);
                    }
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                return object;
            };

            /**
             * Converts this BytesValue to JSON.
             * @function toJSON
             * @memberof google.protobuf.BytesValue
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BytesValue.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for BytesValue
             * @function getTypeUrl
             * @memberof google.protobuf.BytesValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            BytesValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/google.protobuf.BytesValue";
            };

            return BytesValue;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
