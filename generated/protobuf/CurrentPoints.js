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

    CommonProto.Football = (function() {

        /**
         * Namespace Football.
         * @memberof CommonProto
         * @namespace
         */
        const Football = {};

        Football.Analysis = (function() {

            /**
             * Namespace Analysis.
             * @memberof CommonProto.Football
             * @namespace
             */
            const Analysis = {};

            Analysis.CurrentPoints = (function() {

                /**
                 * Properties of a CurrentPoints.
                 * @memberof CommonProto.Football.Analysis
                 * @interface ICurrentPoints
                 * @property {CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null} [homePoints] CurrentPoints homePoints
                 * @property {CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null} [awayPoints] CurrentPoints awayPoints
                 * @property {CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null} [halfHomePoints] CurrentPoints halfHomePoints
                 * @property {CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null} [halfAwayPoints] CurrentPoints halfAwayPoints
                 */

                /**
                 * Constructs a new CurrentPoints.
                 * @memberof CommonProto.Football.Analysis
                 * @classdesc Represents a CurrentPoints.
                 * @implements ICurrentPoints
                 * @constructor
                 * @param {CommonProto.Football.Analysis.ICurrentPoints=} [properties] Properties to set
                 */
                function CurrentPoints(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CurrentPoints homePoints.
                 * @member {CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null|undefined} homePoints
                 * @memberof CommonProto.Football.Analysis.CurrentPoints
                 * @instance
                 */
                CurrentPoints.prototype.homePoints = null;

                /**
                 * CurrentPoints awayPoints.
                 * @member {CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null|undefined} awayPoints
                 * @memberof CommonProto.Football.Analysis.CurrentPoints
                 * @instance
                 */
                CurrentPoints.prototype.awayPoints = null;

                /**
                 * CurrentPoints halfHomePoints.
                 * @member {CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null|undefined} halfHomePoints
                 * @memberof CommonProto.Football.Analysis.CurrentPoints
                 * @instance
                 */
                CurrentPoints.prototype.halfHomePoints = null;

                /**
                 * CurrentPoints halfAwayPoints.
                 * @member {CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null|undefined} halfAwayPoints
                 * @memberof CommonProto.Football.Analysis.CurrentPoints
                 * @instance
                 */
                CurrentPoints.prototype.halfAwayPoints = null;

                /**
                 * Creates a new CurrentPoints instance using the specified properties.
                 * @function create
                 * @memberof CommonProto.Football.Analysis.CurrentPoints
                 * @static
                 * @param {CommonProto.Football.Analysis.ICurrentPoints=} [properties] Properties to set
                 * @returns {CommonProto.Football.Analysis.CurrentPoints} CurrentPoints instance
                 */
                CurrentPoints.create = function create(properties) {
                    return new CurrentPoints(properties);
                };

                /**
                 * Encodes the specified CurrentPoints message. Does not implicitly {@link CommonProto.Football.Analysis.CurrentPoints.verify|verify} messages.
                 * @function encode
                 * @memberof CommonProto.Football.Analysis.CurrentPoints
                 * @static
                 * @param {CommonProto.Football.Analysis.ICurrentPoints} message CurrentPoints message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CurrentPoints.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.homePoints != null && Object.hasOwnProperty.call(message, "homePoints"))
                        $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.encode(message.homePoints, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.awayPoints != null && Object.hasOwnProperty.call(message, "awayPoints"))
                        $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.encode(message.awayPoints, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.halfHomePoints != null && Object.hasOwnProperty.call(message, "halfHomePoints"))
                        $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.encode(message.halfHomePoints, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.halfAwayPoints != null && Object.hasOwnProperty.call(message, "halfAwayPoints"))
                        $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.encode(message.halfAwayPoints, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified CurrentPoints message, length delimited. Does not implicitly {@link CommonProto.Football.Analysis.CurrentPoints.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof CommonProto.Football.Analysis.CurrentPoints
                 * @static
                 * @param {CommonProto.Football.Analysis.ICurrentPoints} message CurrentPoints message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CurrentPoints.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CurrentPoints message from the specified reader or buffer.
                 * @function decode
                 * @memberof CommonProto.Football.Analysis.CurrentPoints
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {CommonProto.Football.Analysis.CurrentPoints} CurrentPoints
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CurrentPoints.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonProto.Football.Analysis.CurrentPoints();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1: {
                                message.homePoints = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.decode(reader, reader.uint32());
                                break;
                            }
                        case 2: {
                                message.awayPoints = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.decode(reader, reader.uint32());
                                break;
                            }
                        case 3: {
                                message.halfHomePoints = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.decode(reader, reader.uint32());
                                break;
                            }
                        case 4: {
                                message.halfAwayPoints = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.decode(reader, reader.uint32());
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
                 * Decodes a CurrentPoints message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof CommonProto.Football.Analysis.CurrentPoints
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {CommonProto.Football.Analysis.CurrentPoints} CurrentPoints
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CurrentPoints.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CurrentPoints message.
                 * @function verify
                 * @memberof CommonProto.Football.Analysis.CurrentPoints
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CurrentPoints.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.homePoints != null && message.hasOwnProperty("homePoints")) {
                        let error = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.verify(message.homePoints);
                        if (error)
                            return "homePoints." + error;
                    }
                    if (message.awayPoints != null && message.hasOwnProperty("awayPoints")) {
                        let error = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.verify(message.awayPoints);
                        if (error)
                            return "awayPoints." + error;
                    }
                    if (message.halfHomePoints != null && message.hasOwnProperty("halfHomePoints")) {
                        let error = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.verify(message.halfHomePoints);
                        if (error)
                            return "halfHomePoints." + error;
                    }
                    if (message.halfAwayPoints != null && message.hasOwnProperty("halfAwayPoints")) {
                        let error = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.verify(message.halfAwayPoints);
                        if (error)
                            return "halfAwayPoints." + error;
                    }
                    return null;
                };

                /**
                 * Creates a CurrentPoints message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof CommonProto.Football.Analysis.CurrentPoints
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {CommonProto.Football.Analysis.CurrentPoints} CurrentPoints
                 */
                CurrentPoints.fromObject = function fromObject(object) {
                    if (object instanceof $root.CommonProto.Football.Analysis.CurrentPoints)
                        return object;
                    let message = new $root.CommonProto.Football.Analysis.CurrentPoints();
                    if (object.homePoints != null) {
                        if (typeof object.homePoints !== "object")
                            throw TypeError(".CommonProto.Football.Analysis.CurrentPoints.homePoints: object expected");
                        message.homePoints = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.fromObject(object.homePoints);
                    }
                    if (object.awayPoints != null) {
                        if (typeof object.awayPoints !== "object")
                            throw TypeError(".CommonProto.Football.Analysis.CurrentPoints.awayPoints: object expected");
                        message.awayPoints = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.fromObject(object.awayPoints);
                    }
                    if (object.halfHomePoints != null) {
                        if (typeof object.halfHomePoints !== "object")
                            throw TypeError(".CommonProto.Football.Analysis.CurrentPoints.halfHomePoints: object expected");
                        message.halfHomePoints = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.fromObject(object.halfHomePoints);
                    }
                    if (object.halfAwayPoints != null) {
                        if (typeof object.halfAwayPoints !== "object")
                            throw TypeError(".CommonProto.Football.Analysis.CurrentPoints.halfAwayPoints: object expected");
                        message.halfAwayPoints = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.fromObject(object.halfAwayPoints);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a CurrentPoints message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof CommonProto.Football.Analysis.CurrentPoints
                 * @static
                 * @param {CommonProto.Football.Analysis.CurrentPoints} message CurrentPoints
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CurrentPoints.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.homePoints = null;
                        object.awayPoints = null;
                        object.halfHomePoints = null;
                        object.halfAwayPoints = null;
                    }
                    if (message.homePoints != null && message.hasOwnProperty("homePoints"))
                        object.homePoints = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.toObject(message.homePoints, options);
                    if (message.awayPoints != null && message.hasOwnProperty("awayPoints"))
                        object.awayPoints = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.toObject(message.awayPoints, options);
                    if (message.halfHomePoints != null && message.hasOwnProperty("halfHomePoints"))
                        object.halfHomePoints = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.toObject(message.halfHomePoints, options);
                    if (message.halfAwayPoints != null && message.hasOwnProperty("halfAwayPoints"))
                        object.halfAwayPoints = $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints.toObject(message.halfAwayPoints, options);
                    return object;
                };

                /**
                 * Converts this CurrentPoints to JSON.
                 * @function toJSON
                 * @memberof CommonProto.Football.Analysis.CurrentPoints
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CurrentPoints.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CurrentPoints
                 * @function getTypeUrl
                 * @memberof CommonProto.Football.Analysis.CurrentPoints
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CurrentPoints.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/CommonProto.Football.Analysis.CurrentPoints";
                };

                /**
                 * PointsKind enum.
                 * @name CommonProto.Football.Analysis.CurrentPoints.PointsKind
                 * @enum {number}
                 * @property {number} ALL=0 ALL value
                 * @property {number} HOME=1 HOME value
                 * @property {number} AWAY=2 AWAY value
                 * @property {number} NEAR=3 NEAR value
                 */
                CurrentPoints.PointsKind = (function() {
                    const valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "ALL"] = 0;
                    values[valuesById[1] = "HOME"] = 1;
                    values[valuesById[2] = "AWAY"] = 2;
                    values[valuesById[3] = "NEAR"] = 3;
                    return values;
                })();

                CurrentPoints.Point = (function() {

                    /**
                     * Properties of a Point.
                     * @memberof CommonProto.Football.Analysis.CurrentPoints
                     * @interface IPoint
                     * @property {string|null} [name] Point name
                     * @property {number|null} [total] Point total
                     * @property {number|null} [win] Point win
                     * @property {number|null} [draw] Point draw
                     * @property {number|null} [loss] Point loss
                     * @property {number|null} [getGoal] Point getGoal
                     * @property {number|null} [lossGoal] Point lossGoal
                     * @property {number|null} [netGoal] Point netGoal
                     * @property {number|null} [point] Point point
                     * @property {number|null} [rank] Point rank
                     * @property {number|null} [winScale] Point winScale
                     * @property {CommonProto.Football.Analysis.CurrentPoints.PointsKind|null} [pointsKind] Point pointsKind
                     */

                    /**
                     * Constructs a new Point.
                     * @memberof CommonProto.Football.Analysis.CurrentPoints
                     * @classdesc Represents a Point.
                     * @implements IPoint
                     * @constructor
                     * @param {CommonProto.Football.Analysis.CurrentPoints.IPoint=} [properties] Properties to set
                     */
                    function Point(properties) {
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * Point name.
                     * @member {string} name
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @instance
                     */
                    Point.prototype.name = "";

                    /**
                     * Point total.
                     * @member {number} total
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @instance
                     */
                    Point.prototype.total = 0;

                    /**
                     * Point win.
                     * @member {number} win
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @instance
                     */
                    Point.prototype.win = 0;

                    /**
                     * Point draw.
                     * @member {number} draw
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @instance
                     */
                    Point.prototype.draw = 0;

                    /**
                     * Point loss.
                     * @member {number} loss
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @instance
                     */
                    Point.prototype.loss = 0;

                    /**
                     * Point getGoal.
                     * @member {number} getGoal
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @instance
                     */
                    Point.prototype.getGoal = 0;

                    /**
                     * Point lossGoal.
                     * @member {number} lossGoal
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @instance
                     */
                    Point.prototype.lossGoal = 0;

                    /**
                     * Point netGoal.
                     * @member {number} netGoal
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @instance
                     */
                    Point.prototype.netGoal = 0;

                    /**
                     * Point point.
                     * @member {number} point
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @instance
                     */
                    Point.prototype.point = 0;

                    /**
                     * Point rank.
                     * @member {number} rank
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @instance
                     */
                    Point.prototype.rank = 0;

                    /**
                     * Point winScale.
                     * @member {number} winScale
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @instance
                     */
                    Point.prototype.winScale = 0;

                    /**
                     * Point pointsKind.
                     * @member {CommonProto.Football.Analysis.CurrentPoints.PointsKind} pointsKind
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @instance
                     */
                    Point.prototype.pointsKind = 0;

                    /**
                     * Creates a new Point instance using the specified properties.
                     * @function create
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @static
                     * @param {CommonProto.Football.Analysis.CurrentPoints.IPoint=} [properties] Properties to set
                     * @returns {CommonProto.Football.Analysis.CurrentPoints.Point} Point instance
                     */
                    Point.create = function create(properties) {
                        return new Point(properties);
                    };

                    /**
                     * Encodes the specified Point message. Does not implicitly {@link CommonProto.Football.Analysis.CurrentPoints.Point.verify|verify} messages.
                     * @function encode
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @static
                     * @param {CommonProto.Football.Analysis.CurrentPoints.IPoint} message Point message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Point.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                        if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.total);
                        if (message.win != null && Object.hasOwnProperty.call(message, "win"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.win);
                        if (message.draw != null && Object.hasOwnProperty.call(message, "draw"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.draw);
                        if (message.loss != null && Object.hasOwnProperty.call(message, "loss"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.loss);
                        if (message.getGoal != null && Object.hasOwnProperty.call(message, "getGoal"))
                            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.getGoal);
                        if (message.lossGoal != null && Object.hasOwnProperty.call(message, "lossGoal"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.lossGoal);
                        if (message.netGoal != null && Object.hasOwnProperty.call(message, "netGoal"))
                            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.netGoal);
                        if (message.point != null && Object.hasOwnProperty.call(message, "point"))
                            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.point);
                        if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.rank);
                        if (message.winScale != null && Object.hasOwnProperty.call(message, "winScale"))
                            writer.uint32(/* id 11, wireType 5 =*/93).float(message.winScale);
                        if (message.pointsKind != null && Object.hasOwnProperty.call(message, "pointsKind"))
                            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.pointsKind);
                        return writer;
                    };

                    /**
                     * Encodes the specified Point message, length delimited. Does not implicitly {@link CommonProto.Football.Analysis.CurrentPoints.Point.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @static
                     * @param {CommonProto.Football.Analysis.CurrentPoints.IPoint} message Point message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Point.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a Point message from the specified reader or buffer.
                     * @function decode
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {CommonProto.Football.Analysis.CurrentPoints.Point} Point
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Point.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonProto.Football.Analysis.CurrentPoints.Point();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.name = reader.string();
                                    break;
                                }
                            case 2: {
                                    message.total = reader.int32();
                                    break;
                                }
                            case 3: {
                                    message.win = reader.int32();
                                    break;
                                }
                            case 4: {
                                    message.draw = reader.int32();
                                    break;
                                }
                            case 5: {
                                    message.loss = reader.int32();
                                    break;
                                }
                            case 6: {
                                    message.getGoal = reader.int32();
                                    break;
                                }
                            case 7: {
                                    message.lossGoal = reader.int32();
                                    break;
                                }
                            case 8: {
                                    message.netGoal = reader.int32();
                                    break;
                                }
                            case 9: {
                                    message.point = reader.int32();
                                    break;
                                }
                            case 10: {
                                    message.rank = reader.int32();
                                    break;
                                }
                            case 11: {
                                    message.winScale = reader.float();
                                    break;
                                }
                            case 12: {
                                    message.pointsKind = reader.int32();
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
                     * Decodes a Point message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {CommonProto.Football.Analysis.CurrentPoints.Point} Point
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Point.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a Point message.
                     * @function verify
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Point.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.name != null && message.hasOwnProperty("name"))
                            if (!$util.isString(message.name))
                                return "name: string expected";
                        if (message.total != null && message.hasOwnProperty("total"))
                            if (!$util.isInteger(message.total))
                                return "total: integer expected";
                        if (message.win != null && message.hasOwnProperty("win"))
                            if (!$util.isInteger(message.win))
                                return "win: integer expected";
                        if (message.draw != null && message.hasOwnProperty("draw"))
                            if (!$util.isInteger(message.draw))
                                return "draw: integer expected";
                        if (message.loss != null && message.hasOwnProperty("loss"))
                            if (!$util.isInteger(message.loss))
                                return "loss: integer expected";
                        if (message.getGoal != null && message.hasOwnProperty("getGoal"))
                            if (!$util.isInteger(message.getGoal))
                                return "getGoal: integer expected";
                        if (message.lossGoal != null && message.hasOwnProperty("lossGoal"))
                            if (!$util.isInteger(message.lossGoal))
                                return "lossGoal: integer expected";
                        if (message.netGoal != null && message.hasOwnProperty("netGoal"))
                            if (!$util.isInteger(message.netGoal))
                                return "netGoal: integer expected";
                        if (message.point != null && message.hasOwnProperty("point"))
                            if (!$util.isInteger(message.point))
                                return "point: integer expected";
                        if (message.rank != null && message.hasOwnProperty("rank"))
                            if (!$util.isInteger(message.rank))
                                return "rank: integer expected";
                        if (message.winScale != null && message.hasOwnProperty("winScale"))
                            if (typeof message.winScale !== "number")
                                return "winScale: number expected";
                        if (message.pointsKind != null && message.hasOwnProperty("pointsKind"))
                            switch (message.pointsKind) {
                            default:
                                return "pointsKind: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        return null;
                    };

                    /**
                     * Creates a Point message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {CommonProto.Football.Analysis.CurrentPoints.Point} Point
                     */
                    Point.fromObject = function fromObject(object) {
                        if (object instanceof $root.CommonProto.Football.Analysis.CurrentPoints.Point)
                            return object;
                        let message = new $root.CommonProto.Football.Analysis.CurrentPoints.Point();
                        if (object.name != null)
                            message.name = String(object.name);
                        if (object.total != null)
                            message.total = object.total | 0;
                        if (object.win != null)
                            message.win = object.win | 0;
                        if (object.draw != null)
                            message.draw = object.draw | 0;
                        if (object.loss != null)
                            message.loss = object.loss | 0;
                        if (object.getGoal != null)
                            message.getGoal = object.getGoal | 0;
                        if (object.lossGoal != null)
                            message.lossGoal = object.lossGoal | 0;
                        if (object.netGoal != null)
                            message.netGoal = object.netGoal | 0;
                        if (object.point != null)
                            message.point = object.point | 0;
                        if (object.rank != null)
                            message.rank = object.rank | 0;
                        if (object.winScale != null)
                            message.winScale = Number(object.winScale);
                        switch (object.pointsKind) {
                        default:
                            if (typeof object.pointsKind === "number") {
                                message.pointsKind = object.pointsKind;
                                break;
                            }
                            break;
                        case "ALL":
                        case 0:
                            message.pointsKind = 0;
                            break;
                        case "HOME":
                        case 1:
                            message.pointsKind = 1;
                            break;
                        case "AWAY":
                        case 2:
                            message.pointsKind = 2;
                            break;
                        case "NEAR":
                        case 3:
                            message.pointsKind = 3;
                            break;
                        }
                        return message;
                    };

                    /**
                     * Creates a plain object from a Point message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @static
                     * @param {CommonProto.Football.Analysis.CurrentPoints.Point} message Point
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Point.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.defaults) {
                            object.name = "";
                            object.total = 0;
                            object.win = 0;
                            object.draw = 0;
                            object.loss = 0;
                            object.getGoal = 0;
                            object.lossGoal = 0;
                            object.netGoal = 0;
                            object.point = 0;
                            object.rank = 0;
                            object.winScale = 0;
                            object.pointsKind = options.enums === String ? "ALL" : 0;
                        }
                        if (message.name != null && message.hasOwnProperty("name"))
                            object.name = message.name;
                        if (message.total != null && message.hasOwnProperty("total"))
                            object.total = message.total;
                        if (message.win != null && message.hasOwnProperty("win"))
                            object.win = message.win;
                        if (message.draw != null && message.hasOwnProperty("draw"))
                            object.draw = message.draw;
                        if (message.loss != null && message.hasOwnProperty("loss"))
                            object.loss = message.loss;
                        if (message.getGoal != null && message.hasOwnProperty("getGoal"))
                            object.getGoal = message.getGoal;
                        if (message.lossGoal != null && message.hasOwnProperty("lossGoal"))
                            object.lossGoal = message.lossGoal;
                        if (message.netGoal != null && message.hasOwnProperty("netGoal"))
                            object.netGoal = message.netGoal;
                        if (message.point != null && message.hasOwnProperty("point"))
                            object.point = message.point;
                        if (message.rank != null && message.hasOwnProperty("rank"))
                            object.rank = message.rank;
                        if (message.winScale != null && message.hasOwnProperty("winScale"))
                            object.winScale = options.json && !isFinite(message.winScale) ? String(message.winScale) : message.winScale;
                        if (message.pointsKind != null && message.hasOwnProperty("pointsKind"))
                            object.pointsKind = options.enums === String ? $root.CommonProto.Football.Analysis.CurrentPoints.PointsKind[message.pointsKind] === undefined ? message.pointsKind : $root.CommonProto.Football.Analysis.CurrentPoints.PointsKind[message.pointsKind] : message.pointsKind;
                        return object;
                    };

                    /**
                     * Converts this Point to JSON.
                     * @function toJSON
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Point.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for Point
                     * @function getTypeUrl
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.Point
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    Point.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/CommonProto.Football.Analysis.CurrentPoints.Point";
                    };

                    return Point;
                })();

                CurrentPoints.TeamPoints = (function() {

                    /**
                     * Properties of a TeamPoints.
                     * @memberof CommonProto.Football.Analysis.CurrentPoints
                     * @interface ITeamPoints
                     * @property {number|null} [teamId] TeamPoints teamId
                     * @property {string|null} [teamName] TeamPoints teamName
                     * @property {number|null} [reductPoint] TeamPoints reductPoint
                     * @property {Array.<CommonProto.Football.Analysis.CurrentPoints.IPoint>|null} [points] TeamPoints points
                     * @property {number|null} [sclassId] TeamPoints sclassId
                     * @property {string|null} [curSeason] TeamPoints curSeason
                     * @property {number|null} [sclassSubId] TeamPoints sclassSubId
                     * @property {string|null} [teamNameShort] TeamPoints teamNameShort
                     */

                    /**
                     * Constructs a new TeamPoints.
                     * @memberof CommonProto.Football.Analysis.CurrentPoints
                     * @classdesc Represents a TeamPoints.
                     * @implements ITeamPoints
                     * @constructor
                     * @param {CommonProto.Football.Analysis.CurrentPoints.ITeamPoints=} [properties] Properties to set
                     */
                    function TeamPoints(properties) {
                        this.points = [];
                        if (properties)
                            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }

                    /**
                     * TeamPoints teamId.
                     * @member {number} teamId
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @instance
                     */
                    TeamPoints.prototype.teamId = 0;

                    /**
                     * TeamPoints teamName.
                     * @member {string} teamName
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @instance
                     */
                    TeamPoints.prototype.teamName = "";

                    /**
                     * TeamPoints reductPoint.
                     * @member {number} reductPoint
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @instance
                     */
                    TeamPoints.prototype.reductPoint = 0;

                    /**
                     * TeamPoints points.
                     * @member {Array.<CommonProto.Football.Analysis.CurrentPoints.IPoint>} points
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @instance
                     */
                    TeamPoints.prototype.points = $util.emptyArray;

                    /**
                     * TeamPoints sclassId.
                     * @member {number} sclassId
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @instance
                     */
                    TeamPoints.prototype.sclassId = 0;

                    /**
                     * TeamPoints curSeason.
                     * @member {string} curSeason
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @instance
                     */
                    TeamPoints.prototype.curSeason = "";

                    /**
                     * TeamPoints sclassSubId.
                     * @member {number} sclassSubId
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @instance
                     */
                    TeamPoints.prototype.sclassSubId = 0;

                    /**
                     * TeamPoints teamNameShort.
                     * @member {string} teamNameShort
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @instance
                     */
                    TeamPoints.prototype.teamNameShort = "";

                    /**
                     * Creates a new TeamPoints instance using the specified properties.
                     * @function create
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @static
                     * @param {CommonProto.Football.Analysis.CurrentPoints.ITeamPoints=} [properties] Properties to set
                     * @returns {CommonProto.Football.Analysis.CurrentPoints.TeamPoints} TeamPoints instance
                     */
                    TeamPoints.create = function create(properties) {
                        return new TeamPoints(properties);
                    };

                    /**
                     * Encodes the specified TeamPoints message. Does not implicitly {@link CommonProto.Football.Analysis.CurrentPoints.TeamPoints.verify|verify} messages.
                     * @function encode
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @static
                     * @param {CommonProto.Football.Analysis.CurrentPoints.ITeamPoints} message TeamPoints message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TeamPoints.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.teamId);
                        if (message.teamName != null && Object.hasOwnProperty.call(message, "teamName"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.teamName);
                        if (message.reductPoint != null && Object.hasOwnProperty.call(message, "reductPoint"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.reductPoint);
                        if (message.points != null && message.points.length)
                            for (let i = 0; i < message.points.length; ++i)
                                $root.CommonProto.Football.Analysis.CurrentPoints.Point.encode(message.points[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                        if (message.sclassId != null && Object.hasOwnProperty.call(message, "sclassId"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.sclassId);
                        if (message.curSeason != null && Object.hasOwnProperty.call(message, "curSeason"))
                            writer.uint32(/* id 6, wireType 2 =*/50).string(message.curSeason);
                        if (message.sclassSubId != null && Object.hasOwnProperty.call(message, "sclassSubId"))
                            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.sclassSubId);
                        if (message.teamNameShort != null && Object.hasOwnProperty.call(message, "teamNameShort"))
                            writer.uint32(/* id 8, wireType 2 =*/66).string(message.teamNameShort);
                        return writer;
                    };

                    /**
                     * Encodes the specified TeamPoints message, length delimited. Does not implicitly {@link CommonProto.Football.Analysis.CurrentPoints.TeamPoints.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @static
                     * @param {CommonProto.Football.Analysis.CurrentPoints.ITeamPoints} message TeamPoints message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    TeamPoints.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };

                    /**
                     * Decodes a TeamPoints message from the specified reader or buffer.
                     * @function decode
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {CommonProto.Football.Analysis.CurrentPoints.TeamPoints} TeamPoints
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TeamPoints.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints();
                        while (reader.pos < end) {
                            let tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1: {
                                    message.teamId = reader.int32();
                                    break;
                                }
                            case 2: {
                                    message.teamName = reader.string();
                                    break;
                                }
                            case 3: {
                                    message.reductPoint = reader.int32();
                                    break;
                                }
                            case 4: {
                                    if (!(message.points && message.points.length))
                                        message.points = [];
                                    message.points.push($root.CommonProto.Football.Analysis.CurrentPoints.Point.decode(reader, reader.uint32()));
                                    break;
                                }
                            case 5: {
                                    message.sclassId = reader.int32();
                                    break;
                                }
                            case 6: {
                                    message.curSeason = reader.string();
                                    break;
                                }
                            case 7: {
                                    message.sclassSubId = reader.int32();
                                    break;
                                }
                            case 8: {
                                    message.teamNameShort = reader.string();
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
                     * Decodes a TeamPoints message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {CommonProto.Football.Analysis.CurrentPoints.TeamPoints} TeamPoints
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    TeamPoints.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };

                    /**
                     * Verifies a TeamPoints message.
                     * @function verify
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    TeamPoints.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            if (!$util.isInteger(message.teamId))
                                return "teamId: integer expected";
                        if (message.teamName != null && message.hasOwnProperty("teamName"))
                            if (!$util.isString(message.teamName))
                                return "teamName: string expected";
                        if (message.reductPoint != null && message.hasOwnProperty("reductPoint"))
                            if (!$util.isInteger(message.reductPoint))
                                return "reductPoint: integer expected";
                        if (message.points != null && message.hasOwnProperty("points")) {
                            if (!Array.isArray(message.points))
                                return "points: array expected";
                            for (let i = 0; i < message.points.length; ++i) {
                                let error = $root.CommonProto.Football.Analysis.CurrentPoints.Point.verify(message.points[i]);
                                if (error)
                                    return "points." + error;
                            }
                        }
                        if (message.sclassId != null && message.hasOwnProperty("sclassId"))
                            if (!$util.isInteger(message.sclassId))
                                return "sclassId: integer expected";
                        if (message.curSeason != null && message.hasOwnProperty("curSeason"))
                            if (!$util.isString(message.curSeason))
                                return "curSeason: string expected";
                        if (message.sclassSubId != null && message.hasOwnProperty("sclassSubId"))
                            if (!$util.isInteger(message.sclassSubId))
                                return "sclassSubId: integer expected";
                        if (message.teamNameShort != null && message.hasOwnProperty("teamNameShort"))
                            if (!$util.isString(message.teamNameShort))
                                return "teamNameShort: string expected";
                        return null;
                    };

                    /**
                     * Creates a TeamPoints message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {CommonProto.Football.Analysis.CurrentPoints.TeamPoints} TeamPoints
                     */
                    TeamPoints.fromObject = function fromObject(object) {
                        if (object instanceof $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints)
                            return object;
                        let message = new $root.CommonProto.Football.Analysis.CurrentPoints.TeamPoints();
                        if (object.teamId != null)
                            message.teamId = object.teamId | 0;
                        if (object.teamName != null)
                            message.teamName = String(object.teamName);
                        if (object.reductPoint != null)
                            message.reductPoint = object.reductPoint | 0;
                        if (object.points) {
                            if (!Array.isArray(object.points))
                                throw TypeError(".CommonProto.Football.Analysis.CurrentPoints.TeamPoints.points: array expected");
                            message.points = [];
                            for (let i = 0; i < object.points.length; ++i) {
                                if (typeof object.points[i] !== "object")
                                    throw TypeError(".CommonProto.Football.Analysis.CurrentPoints.TeamPoints.points: object expected");
                                message.points[i] = $root.CommonProto.Football.Analysis.CurrentPoints.Point.fromObject(object.points[i]);
                            }
                        }
                        if (object.sclassId != null)
                            message.sclassId = object.sclassId | 0;
                        if (object.curSeason != null)
                            message.curSeason = String(object.curSeason);
                        if (object.sclassSubId != null)
                            message.sclassSubId = object.sclassSubId | 0;
                        if (object.teamNameShort != null)
                            message.teamNameShort = String(object.teamNameShort);
                        return message;
                    };

                    /**
                     * Creates a plain object from a TeamPoints message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @static
                     * @param {CommonProto.Football.Analysis.CurrentPoints.TeamPoints} message TeamPoints
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    TeamPoints.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        let object = {};
                        if (options.arrays || options.defaults)
                            object.points = [];
                        if (options.defaults) {
                            object.teamId = 0;
                            object.teamName = "";
                            object.reductPoint = 0;
                            object.sclassId = 0;
                            object.curSeason = "";
                            object.sclassSubId = 0;
                            object.teamNameShort = "";
                        }
                        if (message.teamId != null && message.hasOwnProperty("teamId"))
                            object.teamId = message.teamId;
                        if (message.teamName != null && message.hasOwnProperty("teamName"))
                            object.teamName = message.teamName;
                        if (message.reductPoint != null && message.hasOwnProperty("reductPoint"))
                            object.reductPoint = message.reductPoint;
                        if (message.points && message.points.length) {
                            object.points = [];
                            for (let j = 0; j < message.points.length; ++j)
                                object.points[j] = $root.CommonProto.Football.Analysis.CurrentPoints.Point.toObject(message.points[j], options);
                        }
                        if (message.sclassId != null && message.hasOwnProperty("sclassId"))
                            object.sclassId = message.sclassId;
                        if (message.curSeason != null && message.hasOwnProperty("curSeason"))
                            object.curSeason = message.curSeason;
                        if (message.sclassSubId != null && message.hasOwnProperty("sclassSubId"))
                            object.sclassSubId = message.sclassSubId;
                        if (message.teamNameShort != null && message.hasOwnProperty("teamNameShort"))
                            object.teamNameShort = message.teamNameShort;
                        return object;
                    };

                    /**
                     * Converts this TeamPoints to JSON.
                     * @function toJSON
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    TeamPoints.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };

                    /**
                     * Gets the default type url for TeamPoints
                     * @function getTypeUrl
                     * @memberof CommonProto.Football.Analysis.CurrentPoints.TeamPoints
                     * @static
                     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns {string} The default type url
                     */
                    TeamPoints.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                        if (typeUrlPrefix === undefined) {
                            typeUrlPrefix = "type.googleapis.com";
                        }
                        return typeUrlPrefix + "/CommonProto.Football.Analysis.CurrentPoints.TeamPoints";
                    };

                    return TeamPoints;
                })();

                return CurrentPoints;
            })();

            return Analysis;
        })();

        return Football;
    })();

    return CommonProto;
})();

export { $root as default };
