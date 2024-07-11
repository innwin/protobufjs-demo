import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace CommonProto. */
export namespace CommonProto {

    /** Namespace Football. */
    namespace Football {

        /** Namespace Analysis. */
        namespace Analysis {

            /** Properties of a CurrentPoints. */
            interface ICurrentPoints {

                /** CurrentPoints homePoints */
                homePoints?: (CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null);

                /** CurrentPoints awayPoints */
                awayPoints?: (CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null);

                /** CurrentPoints halfHomePoints */
                halfHomePoints?: (CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null);

                /** CurrentPoints halfAwayPoints */
                halfAwayPoints?: (CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null);
            }

            /** Represents a CurrentPoints. */
            class CurrentPoints implements ICurrentPoints {

                /**
                 * Constructs a new CurrentPoints.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: CommonProto.Football.Analysis.ICurrentPoints);

                /** CurrentPoints homePoints. */
                public homePoints?: (CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null);

                /** CurrentPoints awayPoints. */
                public awayPoints?: (CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null);

                /** CurrentPoints halfHomePoints. */
                public halfHomePoints?: (CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null);

                /** CurrentPoints halfAwayPoints. */
                public halfAwayPoints?: (CommonProto.Football.Analysis.CurrentPoints.ITeamPoints|null);

                /**
                 * Creates a new CurrentPoints instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CurrentPoints instance
                 */
                public static create(properties?: CommonProto.Football.Analysis.ICurrentPoints): CommonProto.Football.Analysis.CurrentPoints;

                /**
                 * Encodes the specified CurrentPoints message. Does not implicitly {@link CommonProto.Football.Analysis.CurrentPoints.verify|verify} messages.
                 * @param message CurrentPoints message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: CommonProto.Football.Analysis.ICurrentPoints, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CurrentPoints message, length delimited. Does not implicitly {@link CommonProto.Football.Analysis.CurrentPoints.verify|verify} messages.
                 * @param message CurrentPoints message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: CommonProto.Football.Analysis.ICurrentPoints, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CurrentPoints message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CurrentPoints
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommonProto.Football.Analysis.CurrentPoints;

                /**
                 * Decodes a CurrentPoints message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CurrentPoints
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommonProto.Football.Analysis.CurrentPoints;

                /**
                 * Verifies a CurrentPoints message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CurrentPoints message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CurrentPoints
                 */
                public static fromObject(object: { [k: string]: any }): CommonProto.Football.Analysis.CurrentPoints;

                /**
                 * Creates a plain object from a CurrentPoints message. Also converts values to other types if specified.
                 * @param message CurrentPoints
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: CommonProto.Football.Analysis.CurrentPoints, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CurrentPoints to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for CurrentPoints
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace CurrentPoints {

                /** PointsKind enum. */
                enum PointsKind {
                    ALL = 0,
                    HOME = 1,
                    AWAY = 2,
                    NEAR = 3
                }

                /** Properties of a Point. */
                interface IPoint {

                    /** Point name */
                    name?: (string|null);

                    /** Point total */
                    total?: (number|null);

                    /** Point win */
                    win?: (number|null);

                    /** Point draw */
                    draw?: (number|null);

                    /** Point loss */
                    loss?: (number|null);

                    /** Point getGoal */
                    getGoal?: (number|null);

                    /** Point lossGoal */
                    lossGoal?: (number|null);

                    /** Point netGoal */
                    netGoal?: (number|null);

                    /** Point point */
                    point?: (number|null);

                    /** Point rank */
                    rank?: (number|null);

                    /** Point winScale */
                    winScale?: (number|null);

                    /** Point pointsKind */
                    pointsKind?: (CommonProto.Football.Analysis.CurrentPoints.PointsKind|null);
                }

                /** Represents a Point. */
                class Point implements IPoint {

                    /**
                     * Constructs a new Point.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: CommonProto.Football.Analysis.CurrentPoints.IPoint);

                    /** Point name. */
                    public name: string;

                    /** Point total. */
                    public total: number;

                    /** Point win. */
                    public win: number;

                    /** Point draw. */
                    public draw: number;

                    /** Point loss. */
                    public loss: number;

                    /** Point getGoal. */
                    public getGoal: number;

                    /** Point lossGoal. */
                    public lossGoal: number;

                    /** Point netGoal. */
                    public netGoal: number;

                    /** Point point. */
                    public point: number;

                    /** Point rank. */
                    public rank: number;

                    /** Point winScale. */
                    public winScale: number;

                    /** Point pointsKind. */
                    public pointsKind: CommonProto.Football.Analysis.CurrentPoints.PointsKind;

                    /**
                     * Creates a new Point instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Point instance
                     */
                    public static create(properties?: CommonProto.Football.Analysis.CurrentPoints.IPoint): CommonProto.Football.Analysis.CurrentPoints.Point;

                    /**
                     * Encodes the specified Point message. Does not implicitly {@link CommonProto.Football.Analysis.CurrentPoints.Point.verify|verify} messages.
                     * @param message Point message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: CommonProto.Football.Analysis.CurrentPoints.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Point message, length delimited. Does not implicitly {@link CommonProto.Football.Analysis.CurrentPoints.Point.verify|verify} messages.
                     * @param message Point message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: CommonProto.Football.Analysis.CurrentPoints.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Point message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Point
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommonProto.Football.Analysis.CurrentPoints.Point;

                    /**
                     * Decodes a Point message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Point
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommonProto.Football.Analysis.CurrentPoints.Point;

                    /**
                     * Verifies a Point message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Point message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Point
                     */
                    public static fromObject(object: { [k: string]: any }): CommonProto.Football.Analysis.CurrentPoints.Point;

                    /**
                     * Creates a plain object from a Point message. Also converts values to other types if specified.
                     * @param message Point
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: CommonProto.Football.Analysis.CurrentPoints.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Point to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for Point
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }

                /** Properties of a TeamPoints. */
                interface ITeamPoints {

                    /** TeamPoints teamId */
                    teamId?: (number|null);

                    /** TeamPoints teamName */
                    teamName?: (string|null);

                    /** TeamPoints reductPoint */
                    reductPoint?: (number|null);

                    /** TeamPoints points */
                    points?: (CommonProto.Football.Analysis.CurrentPoints.IPoint[]|null);

                    /** TeamPoints sclassId */
                    sclassId?: (number|null);

                    /** TeamPoints curSeason */
                    curSeason?: (string|null);

                    /** TeamPoints sclassSubId */
                    sclassSubId?: (number|null);

                    /** TeamPoints teamNameShort */
                    teamNameShort?: (string|null);
                }

                /** Represents a TeamPoints. */
                class TeamPoints implements ITeamPoints {

                    /**
                     * Constructs a new TeamPoints.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: CommonProto.Football.Analysis.CurrentPoints.ITeamPoints);

                    /** TeamPoints teamId. */
                    public teamId: number;

                    /** TeamPoints teamName. */
                    public teamName: string;

                    /** TeamPoints reductPoint. */
                    public reductPoint: number;

                    /** TeamPoints points. */
                    public points: CommonProto.Football.Analysis.CurrentPoints.IPoint[];

                    /** TeamPoints sclassId. */
                    public sclassId: number;

                    /** TeamPoints curSeason. */
                    public curSeason: string;

                    /** TeamPoints sclassSubId. */
                    public sclassSubId: number;

                    /** TeamPoints teamNameShort. */
                    public teamNameShort: string;

                    /**
                     * Creates a new TeamPoints instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TeamPoints instance
                     */
                    public static create(properties?: CommonProto.Football.Analysis.CurrentPoints.ITeamPoints): CommonProto.Football.Analysis.CurrentPoints.TeamPoints;

                    /**
                     * Encodes the specified TeamPoints message. Does not implicitly {@link CommonProto.Football.Analysis.CurrentPoints.TeamPoints.verify|verify} messages.
                     * @param message TeamPoints message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: CommonProto.Football.Analysis.CurrentPoints.ITeamPoints, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TeamPoints message, length delimited. Does not implicitly {@link CommonProto.Football.Analysis.CurrentPoints.TeamPoints.verify|verify} messages.
                     * @param message TeamPoints message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: CommonProto.Football.Analysis.CurrentPoints.ITeamPoints, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TeamPoints message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TeamPoints
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommonProto.Football.Analysis.CurrentPoints.TeamPoints;

                    /**
                     * Decodes a TeamPoints message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TeamPoints
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommonProto.Football.Analysis.CurrentPoints.TeamPoints;

                    /**
                     * Verifies a TeamPoints message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TeamPoints message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TeamPoints
                     */
                    public static fromObject(object: { [k: string]: any }): CommonProto.Football.Analysis.CurrentPoints.TeamPoints;

                    /**
                     * Creates a plain object from a TeamPoints message. Also converts values to other types if specified.
                     * @param message TeamPoints
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: CommonProto.Football.Analysis.CurrentPoints.TeamPoints, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TeamPoints to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };

                    /**
                     * Gets the default type url for TeamPoints
                     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                     * @returns The default type url
                     */
                    public static getTypeUrl(typeUrlPrefix?: string): string;
                }
            }
        }
    }
}
