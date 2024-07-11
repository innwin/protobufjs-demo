import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace CommonProto. */
export namespace CommonProto {

    /** Namespace Odds. */
    namespace Odds {

        /** Properties of an AnalysisOddsList. */
        interface IAnalysisOddsList {

            /** AnalysisOddsList companyList */
            companyList?: (CommonProto.Odds.ICompanyObj[]|null);

            /** AnalysisOddsList panelList */
            panelList?: (CommonProto.Odds.IPlayPanel[]|null);
        }

        /** Represents an AnalysisOddsList. */
        class AnalysisOddsList implements IAnalysisOddsList {

            /**
             * Constructs a new AnalysisOddsList.
             * @param [properties] Properties to set
             */
            constructor(properties?: CommonProto.Odds.IAnalysisOddsList);

            /** AnalysisOddsList companyList. */
            public companyList: CommonProto.Odds.ICompanyObj[];

            /** AnalysisOddsList panelList. */
            public panelList: CommonProto.Odds.IPlayPanel[];

            /**
             * Creates a new AnalysisOddsList instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AnalysisOddsList instance
             */
            public static create(properties?: CommonProto.Odds.IAnalysisOddsList): CommonProto.Odds.AnalysisOddsList;

            /**
             * Encodes the specified AnalysisOddsList message. Does not implicitly {@link CommonProto.Odds.AnalysisOddsList.verify|verify} messages.
             * @param message AnalysisOddsList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: CommonProto.Odds.IAnalysisOddsList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AnalysisOddsList message, length delimited. Does not implicitly {@link CommonProto.Odds.AnalysisOddsList.verify|verify} messages.
             * @param message AnalysisOddsList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: CommonProto.Odds.IAnalysisOddsList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AnalysisOddsList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AnalysisOddsList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommonProto.Odds.AnalysisOddsList;

            /**
             * Decodes an AnalysisOddsList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AnalysisOddsList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommonProto.Odds.AnalysisOddsList;

            /**
             * Verifies an AnalysisOddsList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AnalysisOddsList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AnalysisOddsList
             */
            public static fromObject(object: { [k: string]: any }): CommonProto.Odds.AnalysisOddsList;

            /**
             * Creates a plain object from an AnalysisOddsList message. Also converts values to other types if specified.
             * @param message AnalysisOddsList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: CommonProto.Odds.AnalysisOddsList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AnalysisOddsList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AnalysisOddsList
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CompanyObj. */
        interface ICompanyObj {

            /** CompanyObj companyId */
            companyId?: (number|null);

            /** CompanyObj companyNameCn */
            companyNameCn?: (string|null);

            /** CompanyObj companyNameEn */
            companyNameEn?: (string|null);
        }

        /** Represents a CompanyObj. */
        class CompanyObj implements ICompanyObj {

            /**
             * Constructs a new CompanyObj.
             * @param [properties] Properties to set
             */
            constructor(properties?: CommonProto.Odds.ICompanyObj);

            /** CompanyObj companyId. */
            public companyId: number;

            /** CompanyObj companyNameCn. */
            public companyNameCn: string;

            /** CompanyObj companyNameEn. */
            public companyNameEn: string;

            /**
             * Creates a new CompanyObj instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CompanyObj instance
             */
            public static create(properties?: CommonProto.Odds.ICompanyObj): CommonProto.Odds.CompanyObj;

            /**
             * Encodes the specified CompanyObj message. Does not implicitly {@link CommonProto.Odds.CompanyObj.verify|verify} messages.
             * @param message CompanyObj message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: CommonProto.Odds.ICompanyObj, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CompanyObj message, length delimited. Does not implicitly {@link CommonProto.Odds.CompanyObj.verify|verify} messages.
             * @param message CompanyObj message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: CommonProto.Odds.ICompanyObj, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CompanyObj message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CompanyObj
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommonProto.Odds.CompanyObj;

            /**
             * Decodes a CompanyObj message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CompanyObj
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommonProto.Odds.CompanyObj;

            /**
             * Verifies a CompanyObj message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CompanyObj message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CompanyObj
             */
            public static fromObject(object: { [k: string]: any }): CommonProto.Odds.CompanyObj;

            /**
             * Creates a plain object from a CompanyObj message. Also converts values to other types if specified.
             * @param message CompanyObj
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: CommonProto.Odds.CompanyObj, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CompanyObj to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CompanyObj
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PlayPanel. */
        interface IPlayPanel {

            /** PlayPanel oddsType */
            oddsType?: (number|null);

            /** PlayPanel listType */
            listType?: (CommonProto.Odds.PlayPanel.EnumListType|null);

            /** PlayPanel items */
            items?: (CommonProto.Odds.IOddsItem[]|null);
        }

        /** Represents a PlayPanel. */
        class PlayPanel implements IPlayPanel {

            /**
             * Constructs a new PlayPanel.
             * @param [properties] Properties to set
             */
            constructor(properties?: CommonProto.Odds.IPlayPanel);

            /** PlayPanel oddsType. */
            public oddsType: number;

            /** PlayPanel listType. */
            public listType: CommonProto.Odds.PlayPanel.EnumListType;

            /** PlayPanel items. */
            public items: CommonProto.Odds.IOddsItem[];

            /**
             * Creates a new PlayPanel instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlayPanel instance
             */
            public static create(properties?: CommonProto.Odds.IPlayPanel): CommonProto.Odds.PlayPanel;

            /**
             * Encodes the specified PlayPanel message. Does not implicitly {@link CommonProto.Odds.PlayPanel.verify|verify} messages.
             * @param message PlayPanel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: CommonProto.Odds.IPlayPanel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlayPanel message, length delimited. Does not implicitly {@link CommonProto.Odds.PlayPanel.verify|verify} messages.
             * @param message PlayPanel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: CommonProto.Odds.IPlayPanel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlayPanel message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlayPanel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommonProto.Odds.PlayPanel;

            /**
             * Decodes a PlayPanel message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlayPanel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommonProto.Odds.PlayPanel;

            /**
             * Verifies a PlayPanel message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PlayPanel message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlayPanel
             */
            public static fromObject(object: { [k: string]: any }): CommonProto.Odds.PlayPanel;

            /**
             * Creates a plain object from a PlayPanel message. Also converts values to other types if specified.
             * @param message PlayPanel
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: CommonProto.Odds.PlayPanel, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlayPanel to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PlayPanel
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PlayPanel {

            /** EnumListType enum. */
            enum EnumListType {
                Full = 0,
                FirstHalf = 1,
                SecondHalf = 2
            }
        }

        /** Properties of a MultiOddsItem. */
        interface IMultiOddsItem {

            /** MultiOddsItem oddsId */
            oddsId?: (number|null);

            /** MultiOddsItem num */
            num?: (number|null);

            /** MultiOddsItem firstOdds */
            firstOdds?: (CommonProto.Common.IOddsValues|null);

            /** MultiOddsItem finalOdds */
            finalOdds?: (CommonProto.Common.IOddsValues|null);

            /** MultiOddsItem realOdds */
            realOdds?: (CommonProto.Common.IOddsValues|null);

            /** MultiOddsItem firstMultiOdds */
            firstMultiOdds?: (CommonProto.Common.IOddsMultiValues|null);

            /** MultiOddsItem finalMultiOdds */
            finalMultiOdds?: (CommonProto.Common.IOddsMultiValues|null);

            /** MultiOddsItem realMultiOdds */
            realMultiOdds?: (CommonProto.Common.IOddsMultiValues|null);
        }

        /** Represents a MultiOddsItem. */
        class MultiOddsItem implements IMultiOddsItem {

            /**
             * Constructs a new MultiOddsItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: CommonProto.Odds.IMultiOddsItem);

            /** MultiOddsItem oddsId. */
            public oddsId: number;

            /** MultiOddsItem num. */
            public num: number;

            /** MultiOddsItem firstOdds. */
            public firstOdds?: (CommonProto.Common.IOddsValues|null);

            /** MultiOddsItem finalOdds. */
            public finalOdds?: (CommonProto.Common.IOddsValues|null);

            /** MultiOddsItem realOdds. */
            public realOdds?: (CommonProto.Common.IOddsValues|null);

            /** MultiOddsItem firstMultiOdds. */
            public firstMultiOdds?: (CommonProto.Common.IOddsMultiValues|null);

            /** MultiOddsItem finalMultiOdds. */
            public finalMultiOdds?: (CommonProto.Common.IOddsMultiValues|null);

            /** MultiOddsItem realMultiOdds. */
            public realMultiOdds?: (CommonProto.Common.IOddsMultiValues|null);

            /**
             * Creates a new MultiOddsItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MultiOddsItem instance
             */
            public static create(properties?: CommonProto.Odds.IMultiOddsItem): CommonProto.Odds.MultiOddsItem;

            /**
             * Encodes the specified MultiOddsItem message. Does not implicitly {@link CommonProto.Odds.MultiOddsItem.verify|verify} messages.
             * @param message MultiOddsItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: CommonProto.Odds.IMultiOddsItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MultiOddsItem message, length delimited. Does not implicitly {@link CommonProto.Odds.MultiOddsItem.verify|verify} messages.
             * @param message MultiOddsItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: CommonProto.Odds.IMultiOddsItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MultiOddsItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MultiOddsItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommonProto.Odds.MultiOddsItem;

            /**
             * Decodes a MultiOddsItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MultiOddsItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommonProto.Odds.MultiOddsItem;

            /**
             * Verifies a MultiOddsItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MultiOddsItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MultiOddsItem
             */
            public static fromObject(object: { [k: string]: any }): CommonProto.Odds.MultiOddsItem;

            /**
             * Creates a plain object from a MultiOddsItem message. Also converts values to other types if specified.
             * @param message MultiOddsItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: CommonProto.Odds.MultiOddsItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MultiOddsItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MultiOddsItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OddsItem. */
        interface IOddsItem {

            /** OddsItem oddsId */
            oddsId?: (number|null);

            /** OddsItem companyId */
            companyId?: (number|null);

            /** OddsItem firstOdds */
            firstOdds?: (CommonProto.Common.IOddsValues|null);

            /** OddsItem finalOdds */
            finalOdds?: (CommonProto.Common.IOddsValues|null);

            /** OddsItem realOdds */
            realOdds?: (CommonProto.Common.IOddsValues|null);

            /** OddsItem multiItems */
            multiItems?: (CommonProto.Odds.IMultiOddsItem[]|null);
        }

        /** Represents an OddsItem. */
        class OddsItem implements IOddsItem {

            /**
             * Constructs a new OddsItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: CommonProto.Odds.IOddsItem);

            /** OddsItem oddsId. */
            public oddsId: number;

            /** OddsItem companyId. */
            public companyId: number;

            /** OddsItem firstOdds. */
            public firstOdds?: (CommonProto.Common.IOddsValues|null);

            /** OddsItem finalOdds. */
            public finalOdds?: (CommonProto.Common.IOddsValues|null);

            /** OddsItem realOdds. */
            public realOdds?: (CommonProto.Common.IOddsValues|null);

            /** OddsItem multiItems. */
            public multiItems: CommonProto.Odds.IMultiOddsItem[];

            /**
             * Creates a new OddsItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OddsItem instance
             */
            public static create(properties?: CommonProto.Odds.IOddsItem): CommonProto.Odds.OddsItem;

            /**
             * Encodes the specified OddsItem message. Does not implicitly {@link CommonProto.Odds.OddsItem.verify|verify} messages.
             * @param message OddsItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: CommonProto.Odds.IOddsItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OddsItem message, length delimited. Does not implicitly {@link CommonProto.Odds.OddsItem.verify|verify} messages.
             * @param message OddsItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: CommonProto.Odds.IOddsItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OddsItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OddsItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommonProto.Odds.OddsItem;

            /**
             * Decodes an OddsItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OddsItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommonProto.Odds.OddsItem;

            /**
             * Verifies an OddsItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OddsItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OddsItem
             */
            public static fromObject(object: { [k: string]: any }): CommonProto.Odds.OddsItem;

            /**
             * Creates a plain object from an OddsItem message. Also converts values to other types if specified.
             * @param message OddsItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: CommonProto.Odds.OddsItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OddsItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OddsItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace Common. */
    namespace Common {

        /** Properties of an OddsValues. */
        interface IOddsValues {

            /** OddsValues homeOdds */
            homeOdds?: (number|null);

            /** OddsValues drawOdds */
            drawOdds?: (number|null);

            /** OddsValues awayOdds */
            awayOdds?: (number|null);

            /** OddsValues handicap */
            handicap?: (google.protobuf.IFloatValue|null);
        }

        /** Represents an OddsValues. */
        class OddsValues implements IOddsValues {

            /**
             * Constructs a new OddsValues.
             * @param [properties] Properties to set
             */
            constructor(properties?: CommonProto.Common.IOddsValues);

            /** OddsValues homeOdds. */
            public homeOdds: number;

            /** OddsValues drawOdds. */
            public drawOdds: number;

            /** OddsValues awayOdds. */
            public awayOdds: number;

            /** OddsValues handicap. */
            public handicap?: (google.protobuf.IFloatValue|null);

            /**
             * Creates a new OddsValues instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OddsValues instance
             */
            public static create(properties?: CommonProto.Common.IOddsValues): CommonProto.Common.OddsValues;

            /**
             * Encodes the specified OddsValues message. Does not implicitly {@link CommonProto.Common.OddsValues.verify|verify} messages.
             * @param message OddsValues message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: CommonProto.Common.IOddsValues, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OddsValues message, length delimited. Does not implicitly {@link CommonProto.Common.OddsValues.verify|verify} messages.
             * @param message OddsValues message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: CommonProto.Common.IOddsValues, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OddsValues message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OddsValues
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommonProto.Common.OddsValues;

            /**
             * Decodes an OddsValues message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OddsValues
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommonProto.Common.OddsValues;

            /**
             * Verifies an OddsValues message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OddsValues message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OddsValues
             */
            public static fromObject(object: { [k: string]: any }): CommonProto.Common.OddsValues;

            /**
             * Creates a plain object from an OddsValues message. Also converts values to other types if specified.
             * @param message OddsValues
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: CommonProto.Common.OddsValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OddsValues to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OddsValues
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OddsMultiValues. */
        interface IOddsMultiValues {

            /** OddsMultiValues homeValue_1 */
            homeValue_1?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_2 */
            homeValue_2?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_3 */
            homeValue_3?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_4 */
            homeValue_4?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_5 */
            homeValue_5?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_6 */
            homeValue_6?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_7 */
            homeValue_7?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_8 */
            homeValue_8?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_9 */
            homeValue_9?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_10 */
            homeValue_10?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_1 */
            guestValue_1?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_2 */
            guestValue_2?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_3 */
            guestValue_3?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_4 */
            guestValue_4?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_5 */
            guestValue_5?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_6 */
            guestValue_6?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_7 */
            guestValue_7?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_8 */
            guestValue_8?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_9 */
            guestValue_9?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_10 */
            guestValue_10?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues drawValue_1 */
            drawValue_1?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues drawValue_2 */
            drawValue_2?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues drawValue_3 */
            drawValue_3?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues drawValue_4 */
            drawValue_4?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues drawValue_5 */
            drawValue_5?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues otherValue */
            otherValue?: (google.protobuf.IFloatValue|null);
        }

        /** Represents an OddsMultiValues. */
        class OddsMultiValues implements IOddsMultiValues {

            /**
             * Constructs a new OddsMultiValues.
             * @param [properties] Properties to set
             */
            constructor(properties?: CommonProto.Common.IOddsMultiValues);

            /** OddsMultiValues homeValue_1. */
            public homeValue_1?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_2. */
            public homeValue_2?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_3. */
            public homeValue_3?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_4. */
            public homeValue_4?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_5. */
            public homeValue_5?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_6. */
            public homeValue_6?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_7. */
            public homeValue_7?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_8. */
            public homeValue_8?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_9. */
            public homeValue_9?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues homeValue_10. */
            public homeValue_10?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_1. */
            public guestValue_1?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_2. */
            public guestValue_2?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_3. */
            public guestValue_3?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_4. */
            public guestValue_4?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_5. */
            public guestValue_5?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_6. */
            public guestValue_6?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_7. */
            public guestValue_7?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_8. */
            public guestValue_8?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_9. */
            public guestValue_9?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues guestValue_10. */
            public guestValue_10?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues drawValue_1. */
            public drawValue_1?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues drawValue_2. */
            public drawValue_2?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues drawValue_3. */
            public drawValue_3?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues drawValue_4. */
            public drawValue_4?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues drawValue_5. */
            public drawValue_5?: (google.protobuf.IFloatValue|null);

            /** OddsMultiValues otherValue. */
            public otherValue?: (google.protobuf.IFloatValue|null);

            /**
             * Creates a new OddsMultiValues instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OddsMultiValues instance
             */
            public static create(properties?: CommonProto.Common.IOddsMultiValues): CommonProto.Common.OddsMultiValues;

            /**
             * Encodes the specified OddsMultiValues message. Does not implicitly {@link CommonProto.Common.OddsMultiValues.verify|verify} messages.
             * @param message OddsMultiValues message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: CommonProto.Common.IOddsMultiValues, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OddsMultiValues message, length delimited. Does not implicitly {@link CommonProto.Common.OddsMultiValues.verify|verify} messages.
             * @param message OddsMultiValues message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: CommonProto.Common.IOddsMultiValues, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OddsMultiValues message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OddsMultiValues
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommonProto.Common.OddsMultiValues;

            /**
             * Decodes an OddsMultiValues message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OddsMultiValues
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommonProto.Common.OddsMultiValues;

            /**
             * Verifies an OddsMultiValues message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OddsMultiValues message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OddsMultiValues
             */
            public static fromObject(object: { [k: string]: any }): CommonProto.Common.OddsMultiValues;

            /**
             * Creates a plain object from an OddsMultiValues message. Also converts values to other types if specified.
             * @param message OddsMultiValues
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: CommonProto.Common.OddsMultiValues, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OddsMultiValues to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OddsMultiValues
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

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

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DoubleValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FloatValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt64Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Int32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UInt32Value
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BoolValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for StringValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BytesValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
