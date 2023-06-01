import * as $protobuf from "protobufjs";
/** Namespace pb. */
export namespace pb {

    /** CmdScope enum. */
    enum CmdScope {
        SPACE = 0,
        EVENT = 1
    }

    /** StatusType enum. */
    enum StatusType {
        NORMAL = 0,
        OFFLINE = 1
    }

    /** AnimationType enum. */
    enum AnimationType {
        DANCE_1 = 0,
        DANCE_2 = 1,
        DANCE_3 = 2,
        DANCE_4 = 3,
        DANCE_5 = 4,
        DANCE_6 = 5,
        DANCE_7 = 6,
        DANCE_8 = 7,
        DANCE_9 = 8,
        DANCE_10 = 9,
        HELLO_B = 10,
        HELLO_F = 11,
        HELLO_P = 12,
        JUMP_B = 13,
        JUMP_F = 14,
        JUMP_P = 15,
        STAND_B = 16,
        STAND_F = 17,
        STAND_P = 18,
        WALK_B = 19,
        WALK_F = 20,
        WALK_P = 21,
        SIT_B = 22,
        SIT_F = 23,
        SIT_P = 24
    }

    /** InteractivePageType enum. */
    enum InteractivePageType {
        IFRAME = 0,
        SpecialEffects = 1
    }

    /** SpaceStatusType enum. */
    enum SpaceStatusType {
        MuteStatus = 0,
        CameraStatus = 1,
        ShareScreenStatus = 2
    }

    /** EventStatusType enum. */
    enum EventStatusType {
        ChatStatus = 0
    }

    /** ChatType enum. */
    enum ChatType {
        Event = 0,
        Space = 1,
        Near = 2
    }

    /** MapMaterialType enum. */
    enum MapMaterialType {
        Chartlet = 0
    }

    /** BgmStatus enum. */
    enum BgmStatus {
        RESET = 0,
        START = 1,
        SUSPENDED = 2
    }

    /** PopupType enum. */
    enum PopupType {
        LocalFile = 0,
        LocalVideo = 1,
        LocalPicture = 2,
        LiveStream = 3,
        StickyNote = 4,
        Whiteboard = 5,
        HyperlinkIframe = 6,
        HyperlinkWindow = 7,
        SpecialEffects = 8
    }

    /** DirectionType enum. */
    enum DirectionType {
        LEFT = 0,
        RIGHT = 1,
        UP = 2,
        DOWN = 3
    }

    /** MoveMode enum. */
    enum MoveMode {
        NORMAL_MODE = 0,
        FLY_MODE = 1
    }

    /** Properties of an Error. */
    interface IError {

        /** Error Code */
        Code?: (string|null);

        /** Error Msg */
        Msg?: (string|null);

        /** Error Metadata */
        Metadata?: ({ [k: string]: string }|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IError);

        /** Error Code. */
        public Code: string;

        /** Error Msg. */
        public Msg: string;

        /** Error Metadata. */
        public Metadata: { [k: string]: string };

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: pb.IError): pb.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link pb.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link pb.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Error message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Error
         */
        public static fromObject(object: { [k: string]: any }): pb.Error;

        /**
         * Creates a plain object from an Error message. Also converts values to other types if specified.
         * @param message Error
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Error to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConnectSpaceReq. */
    interface IConnectSpaceReq {

        /** ConnectSpaceReq SpaceId */
        SpaceId?: (string|null);

        /** ConnectSpaceReq Pid */
        Pid?: (string|null);

        /** ConnectSpaceReq EventId */
        EventId?: (string|null);
    }

    /** Represents a ConnectSpaceReq. */
    class ConnectSpaceReq implements IConnectSpaceReq {

        /**
         * Constructs a new ConnectSpaceReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IConnectSpaceReq);

        /** ConnectSpaceReq SpaceId. */
        public SpaceId: string;

        /** ConnectSpaceReq Pid. */
        public Pid: string;

        /** ConnectSpaceReq EventId. */
        public EventId: string;

        /**
         * Creates a new ConnectSpaceReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectSpaceReq instance
         */
        public static create(properties?: pb.IConnectSpaceReq): pb.ConnectSpaceReq;

        /**
         * Encodes the specified ConnectSpaceReq message. Does not implicitly {@link pb.ConnectSpaceReq.verify|verify} messages.
         * @param message ConnectSpaceReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IConnectSpaceReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectSpaceReq message, length delimited. Does not implicitly {@link pb.ConnectSpaceReq.verify|verify} messages.
         * @param message ConnectSpaceReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IConnectSpaceReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectSpaceReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectSpaceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ConnectSpaceReq;

        /**
         * Decodes a ConnectSpaceReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectSpaceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ConnectSpaceReq;

        /**
         * Verifies a ConnectSpaceReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectSpaceReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectSpaceReq
         */
        public static fromObject(object: { [k: string]: any }): pb.ConnectSpaceReq;

        /**
         * Creates a plain object from a ConnectSpaceReq message. Also converts values to other types if specified.
         * @param message ConnectSpaceReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ConnectSpaceReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectSpaceReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pid. */
    interface IPid {

        /** Pid Pid */
        Pid?: (string|null);
    }

    /** Represents a Pid. */
    class Pid implements IPid {

        /**
         * Constructs a new Pid.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPid);

        /** Pid Pid. */
        public Pid: string;

        /**
         * Creates a new Pid instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pid instance
         */
        public static create(properties?: pb.IPid): pb.Pid;

        /**
         * Encodes the specified Pid message. Does not implicitly {@link pb.Pid.verify|verify} messages.
         * @param message Pid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPid, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pid message, length delimited. Does not implicitly {@link pb.Pid.verify|verify} messages.
         * @param message Pid message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPid, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pid message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Pid;

        /**
         * Decodes a Pid message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Pid;

        /**
         * Verifies a Pid message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pid message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pid
         */
        public static fromObject(object: { [k: string]: any }): pb.Pid;

        /**
         * Creates a plain object from a Pid message. Also converts values to other types if specified.
         * @param message Pid
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Pid, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pid to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpaceId. */
    interface ISpaceId {

        /** SpaceId SpaceId */
        SpaceId?: (string|null);
    }

    /** Represents a SpaceId. */
    class SpaceId implements ISpaceId {

        /**
         * Constructs a new SpaceId.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISpaceId);

        /** SpaceId SpaceId. */
        public SpaceId: string;

        /**
         * Creates a new SpaceId instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpaceId instance
         */
        public static create(properties?: pb.ISpaceId): pb.SpaceId;

        /**
         * Encodes the specified SpaceId message. Does not implicitly {@link pb.SpaceId.verify|verify} messages.
         * @param message SpaceId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISpaceId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpaceId message, length delimited. Does not implicitly {@link pb.SpaceId.verify|verify} messages.
         * @param message SpaceId message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISpaceId, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpaceId message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpaceId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SpaceId;

        /**
         * Decodes a SpaceId message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpaceId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SpaceId;

        /**
         * Verifies a SpaceId message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpaceId message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpaceId
         */
        public static fromObject(object: { [k: string]: any }): pb.SpaceId;

        /**
         * Creates a plain object from a SpaceId message. Also converts values to other types if specified.
         * @param message SpaceId
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SpaceId, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpaceId to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Animation. */
    interface IAnimation {

        /** Animation Pid */
        Pid?: (string|null);

        /** Animation A */
        A?: (pb.AnimationType|null);
    }

    /** Represents an Animation. */
    class Animation implements IAnimation {

        /**
         * Constructs a new Animation.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAnimation);

        /** Animation Pid. */
        public Pid: string;

        /** Animation A. */
        public A: pb.AnimationType;

        /**
         * Creates a new Animation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Animation instance
         */
        public static create(properties?: pb.IAnimation): pb.Animation;

        /**
         * Encodes the specified Animation message. Does not implicitly {@link pb.Animation.verify|verify} messages.
         * @param message Animation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAnimation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Animation message, length delimited. Does not implicitly {@link pb.Animation.verify|verify} messages.
         * @param message Animation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IAnimation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Animation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Animation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Animation;

        /**
         * Decodes an Animation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Animation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Animation;

        /**
         * Verifies an Animation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Animation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Animation
         */
        public static fromObject(object: { [k: string]: any }): pb.Animation;

        /**
         * Creates a plain object from an Animation message. Also converts values to other types if specified.
         * @param message Animation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Animation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Animation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Position. */
    interface IPosition {

        /** Position Pid */
        Pid?: (string|null);

        /** Position RealName */
        RealName?: (string|null);

        /** Position X */
        X?: (number|null);

        /** Position Y */
        Y?: (number|null);

        /** Position Z */
        Z?: (number|null);

        /** Position Angle */
        Angle?: (number|null);

        /** Position D */
        D?: (pb.DirectionType|null);

        /** Position A */
        A?: (pb.AnimationType|null);

        /** Position S */
        S?: (pb.StatusType|null);

        /** Position B */
        B?: (boolean|null);

        /** Position I */
        I?: (string|null);

        /** Position MoveMode */
        MoveMode?: (pb.MoveMode|null);

        /** Position IsRaiseHand */
        IsRaiseHand?: (boolean|null);

        /** Position Identity */
        Identity?: (pb.Identity|null);

        /** Position Pets */
        Pets?: (string[]|null);

        /** Position RoleName */
        RoleName?: (string|null);

        /** Position RoleType */
        RoleType?: (pb.RoleType|null);
    }

    /** Represents a Position. */
    class Position implements IPosition {

        /**
         * Constructs a new Position.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPosition);

        /** Position Pid. */
        public Pid: string;

        /** Position RealName. */
        public RealName: string;

        /** Position X. */
        public X: number;

        /** Position Y. */
        public Y: number;

        /** Position Z. */
        public Z: number;

        /** Position Angle. */
        public Angle: number;

        /** Position D. */
        public D: pb.DirectionType;

        /** Position A. */
        public A: pb.AnimationType;

        /** Position S. */
        public S: pb.StatusType;

        /** Position B. */
        public B: boolean;

        /** Position I. */
        public I: string;

        /** Position MoveMode. */
        public MoveMode: pb.MoveMode;

        /** Position IsRaiseHand. */
        public IsRaiseHand: boolean;

        /** Position Identity. */
        public Identity: pb.Identity;

        /** Position Pets. */
        public Pets: string[];

        /** Position RoleName. */
        public RoleName: string;

        /** Position RoleType. */
        public RoleType: pb.RoleType;

        /**
         * Creates a new Position instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Position instance
         */
        public static create(properties?: pb.IPosition): pb.Position;

        /**
         * Encodes the specified Position message. Does not implicitly {@link pb.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link pb.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Position;

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Position;

        /**
         * Verifies a Position message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Position
         */
        public static fromObject(object: { [k: string]: any }): pb.Position;

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @param message Position
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Position to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** RoleType enum. */
    enum RoleType {
        Role_1 = 0,
        Role_2 = 1,
        Role_3 = 2,
        Role_4 = 3,
        Role_5 = 4
    }

    /** Identity enum. */
    enum Identity {
        Normal = 0,
        Guest = 1
    }

    /** Properties of a MovePosition. */
    interface IMovePosition {

        /** MovePosition Pid */
        Pid?: (string|null);

        /** MovePosition X */
        X?: (number|null);

        /** MovePosition Y */
        Y?: (number|null);

        /** MovePosition Transfer */
        Transfer?: (boolean|null);
    }

    /** Represents a MovePosition. */
    class MovePosition implements IMovePosition {

        /**
         * Constructs a new MovePosition.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMovePosition);

        /** MovePosition Pid. */
        public Pid: string;

        /** MovePosition X. */
        public X: number;

        /** MovePosition Y. */
        public Y: number;

        /** MovePosition Transfer. */
        public Transfer: boolean;

        /**
         * Creates a new MovePosition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MovePosition instance
         */
        public static create(properties?: pb.IMovePosition): pb.MovePosition;

        /**
         * Encodes the specified MovePosition message. Does not implicitly {@link pb.MovePosition.verify|verify} messages.
         * @param message MovePosition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMovePosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MovePosition message, length delimited. Does not implicitly {@link pb.MovePosition.verify|verify} messages.
         * @param message MovePosition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IMovePosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MovePosition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MovePosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MovePosition;

        /**
         * Decodes a MovePosition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MovePosition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.MovePosition;

        /**
         * Verifies a MovePosition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MovePosition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MovePosition
         */
        public static fromObject(object: { [k: string]: any }): pb.MovePosition;

        /**
         * Creates a plain object from a MovePosition message. Also converts values to other types if specified.
         * @param message MovePosition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.MovePosition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MovePosition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserMessage. */
    interface IUserMessage {

        /** UserMessage MsgId */
        MsgId?: (string|null);

        /** UserMessage Pid */
        Pid?: (string|null);

        /** UserMessage RealName */
        RealName?: (string|null);

        /** UserMessage Time */
        Time?: (number|Long|null);

        /** UserMessage Content */
        Content?: (string|null);

        /** UserMessage SpeakType */
        SpeakType?: (number|null);

        /** UserMessage I */
        I?: (string|null);
    }

    /** Represents a UserMessage. */
    class UserMessage implements IUserMessage {

        /**
         * Constructs a new UserMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUserMessage);

        /** UserMessage MsgId. */
        public MsgId: string;

        /** UserMessage Pid. */
        public Pid: string;

        /** UserMessage RealName. */
        public RealName: string;

        /** UserMessage Time. */
        public Time: (number|Long);

        /** UserMessage Content. */
        public Content: string;

        /** UserMessage SpeakType. */
        public SpeakType: number;

        /** UserMessage I. */
        public I: string;

        /**
         * Creates a new UserMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserMessage instance
         */
        public static create(properties?: pb.IUserMessage): pb.UserMessage;

        /**
         * Encodes the specified UserMessage message. Does not implicitly {@link pb.UserMessage.verify|verify} messages.
         * @param message UserMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUserMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserMessage message, length delimited. Does not implicitly {@link pb.UserMessage.verify|verify} messages.
         * @param message UserMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IUserMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UserMessage;

        /**
         * Decodes a UserMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.UserMessage;

        /**
         * Verifies a UserMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserMessage
         */
        public static fromObject(object: { [k: string]: any }): pb.UserMessage;

        /**
         * Creates a plain object from a UserMessage message. Also converts values to other types if specified.
         * @param message UserMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.UserMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JoinReq. */
    interface IJoinReq {

        /** JoinReq Pid */
        Pid?: (string|null);

        /** JoinReq RealName */
        RealName?: (string|null);

        /** JoinReq SpaceId */
        SpaceId?: (string|null);

        /** JoinReq EventId */
        EventId?: (string|null);

        /** JoinReq I */
        I?: (string|null);

        /** JoinReq X */
        X?: (number|null);

        /** JoinReq Y */
        Y?: (number|null);
    }

    /** Represents a JoinReq. */
    class JoinReq implements IJoinReq {

        /**
         * Constructs a new JoinReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IJoinReq);

        /** JoinReq Pid. */
        public Pid: string;

        /** JoinReq RealName. */
        public RealName: string;

        /** JoinReq SpaceId. */
        public SpaceId: string;

        /** JoinReq EventId. */
        public EventId: string;

        /** JoinReq I. */
        public I: string;

        /** JoinReq X. */
        public X: number;

        /** JoinReq Y. */
        public Y: number;

        /**
         * Creates a new JoinReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JoinReq instance
         */
        public static create(properties?: pb.IJoinReq): pb.JoinReq;

        /**
         * Encodes the specified JoinReq message. Does not implicitly {@link pb.JoinReq.verify|verify} messages.
         * @param message JoinReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IJoinReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JoinReq message, length delimited. Does not implicitly {@link pb.JoinReq.verify|verify} messages.
         * @param message JoinReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IJoinReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.JoinReq;

        /**
         * Decodes a JoinReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.JoinReq;

        /**
         * Verifies a JoinReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JoinReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JoinReq
         */
        public static fromObject(object: { [k: string]: any }): pb.JoinReq;

        /**
         * Creates a plain object from a JoinReq message. Also converts values to other types if specified.
         * @param message JoinReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.JoinReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JoinReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeSpaceStatusCmd. */
    interface IChangeSpaceStatusCmd {

        /** ChangeSpaceStatusCmd eventId */
        eventId?: (string|null);

        /** ChangeSpaceStatusCmd spaceId */
        spaceId?: (string|null);

        /** ChangeSpaceStatusCmd statusType */
        statusType?: (pb.SpaceStatusType|null);

        /** ChangeSpaceStatusCmd status */
        status?: (boolean|null);
    }

    /** Represents a ChangeSpaceStatusCmd. */
    class ChangeSpaceStatusCmd implements IChangeSpaceStatusCmd {

        /**
         * Constructs a new ChangeSpaceStatusCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IChangeSpaceStatusCmd);

        /** ChangeSpaceStatusCmd eventId. */
        public eventId: string;

        /** ChangeSpaceStatusCmd spaceId. */
        public spaceId: string;

        /** ChangeSpaceStatusCmd statusType. */
        public statusType: pb.SpaceStatusType;

        /** ChangeSpaceStatusCmd status. */
        public status: boolean;

        /**
         * Creates a new ChangeSpaceStatusCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeSpaceStatusCmd instance
         */
        public static create(properties?: pb.IChangeSpaceStatusCmd): pb.ChangeSpaceStatusCmd;

        /**
         * Encodes the specified ChangeSpaceStatusCmd message. Does not implicitly {@link pb.ChangeSpaceStatusCmd.verify|verify} messages.
         * @param message ChangeSpaceStatusCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IChangeSpaceStatusCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeSpaceStatusCmd message, length delimited. Does not implicitly {@link pb.ChangeSpaceStatusCmd.verify|verify} messages.
         * @param message ChangeSpaceStatusCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IChangeSpaceStatusCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeSpaceStatusCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeSpaceStatusCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ChangeSpaceStatusCmd;

        /**
         * Decodes a ChangeSpaceStatusCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeSpaceStatusCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ChangeSpaceStatusCmd;

        /**
         * Verifies a ChangeSpaceStatusCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeSpaceStatusCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeSpaceStatusCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.ChangeSpaceStatusCmd;

        /**
         * Creates a plain object from a ChangeSpaceStatusCmd message. Also converts values to other types if specified.
         * @param message ChangeSpaceStatusCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ChangeSpaceStatusCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeSpaceStatusCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeEventStatusCmd. */
    interface IChangeEventStatusCmd {

        /** ChangeEventStatusCmd eventId */
        eventId?: (string|null);

        /** ChangeEventStatusCmd spaceId */
        spaceId?: (string|null);

        /** ChangeEventStatusCmd statusType */
        statusType?: (pb.EventStatusType|null);

        /** ChangeEventStatusCmd status */
        status?: (boolean|null);
    }

    /** Represents a ChangeEventStatusCmd. */
    class ChangeEventStatusCmd implements IChangeEventStatusCmd {

        /**
         * Constructs a new ChangeEventStatusCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IChangeEventStatusCmd);

        /** ChangeEventStatusCmd eventId. */
        public eventId: string;

        /** ChangeEventStatusCmd spaceId. */
        public spaceId: string;

        /** ChangeEventStatusCmd statusType. */
        public statusType: pb.EventStatusType;

        /** ChangeEventStatusCmd status. */
        public status: boolean;

        /**
         * Creates a new ChangeEventStatusCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeEventStatusCmd instance
         */
        public static create(properties?: pb.IChangeEventStatusCmd): pb.ChangeEventStatusCmd;

        /**
         * Encodes the specified ChangeEventStatusCmd message. Does not implicitly {@link pb.ChangeEventStatusCmd.verify|verify} messages.
         * @param message ChangeEventStatusCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IChangeEventStatusCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeEventStatusCmd message, length delimited. Does not implicitly {@link pb.ChangeEventStatusCmd.verify|verify} messages.
         * @param message ChangeEventStatusCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IChangeEventStatusCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeEventStatusCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeEventStatusCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ChangeEventStatusCmd;

        /**
         * Decodes a ChangeEventStatusCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeEventStatusCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ChangeEventStatusCmd;

        /**
         * Verifies a ChangeEventStatusCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeEventStatusCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeEventStatusCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.ChangeEventStatusCmd;

        /**
         * Creates a plain object from a ChangeEventStatusCmd message. Also converts values to other types if specified.
         * @param message ChangeEventStatusCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ChangeEventStatusCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeEventStatusCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteChatMessageCmd. */
    interface IDeleteChatMessageCmd {

        /** DeleteChatMessageCmd eventId */
        eventId?: (string|null);

        /** DeleteChatMessageCmd spaceId */
        spaceId?: (string|null);

        /** DeleteChatMessageCmd chatType */
        chatType?: (pb.ChatType|null);

        /** DeleteChatMessageCmd msgId */
        msgId?: (string|null);
    }

    /** Represents a DeleteChatMessageCmd. */
    class DeleteChatMessageCmd implements IDeleteChatMessageCmd {

        /**
         * Constructs a new DeleteChatMessageCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IDeleteChatMessageCmd);

        /** DeleteChatMessageCmd eventId. */
        public eventId: string;

        /** DeleteChatMessageCmd spaceId. */
        public spaceId: string;

        /** DeleteChatMessageCmd chatType. */
        public chatType: pb.ChatType;

        /** DeleteChatMessageCmd msgId. */
        public msgId: string;

        /**
         * Creates a new DeleteChatMessageCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteChatMessageCmd instance
         */
        public static create(properties?: pb.IDeleteChatMessageCmd): pb.DeleteChatMessageCmd;

        /**
         * Encodes the specified DeleteChatMessageCmd message. Does not implicitly {@link pb.DeleteChatMessageCmd.verify|verify} messages.
         * @param message DeleteChatMessageCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IDeleteChatMessageCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteChatMessageCmd message, length delimited. Does not implicitly {@link pb.DeleteChatMessageCmd.verify|verify} messages.
         * @param message DeleteChatMessageCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IDeleteChatMessageCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteChatMessageCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteChatMessageCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.DeleteChatMessageCmd;

        /**
         * Decodes a DeleteChatMessageCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteChatMessageCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.DeleteChatMessageCmd;

        /**
         * Verifies a DeleteChatMessageCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteChatMessageCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteChatMessageCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.DeleteChatMessageCmd;

        /**
         * Creates a plain object from a DeleteChatMessageCmd message. Also converts values to other types if specified.
         * @param message DeleteChatMessageCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.DeleteChatMessageCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteChatMessageCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeBgmCmd. */
    interface IChangeBgmCmd {

        /** ChangeBgmCmd eventId */
        eventId?: (string|null);

        /** ChangeBgmCmd spaceId */
        spaceId?: (string|null);

        /** ChangeBgmCmd scope */
        scope?: (pb.CmdScope|null);

        /** ChangeBgmCmd url */
        url?: (string|null);

        /** ChangeBgmCmd name */
        name?: (string|null);

        /** ChangeBgmCmd Status */
        Status?: (pb.BgmStatus|null);

        /** ChangeBgmCmd volume */
        volume?: (number|null);
    }

    /** Represents a ChangeBgmCmd. */
    class ChangeBgmCmd implements IChangeBgmCmd {

        /**
         * Constructs a new ChangeBgmCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IChangeBgmCmd);

        /** ChangeBgmCmd eventId. */
        public eventId: string;

        /** ChangeBgmCmd spaceId. */
        public spaceId: string;

        /** ChangeBgmCmd scope. */
        public scope: pb.CmdScope;

        /** ChangeBgmCmd url. */
        public url: string;

        /** ChangeBgmCmd name. */
        public name: string;

        /** ChangeBgmCmd Status. */
        public Status: pb.BgmStatus;

        /** ChangeBgmCmd volume. */
        public volume: number;

        /**
         * Creates a new ChangeBgmCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeBgmCmd instance
         */
        public static create(properties?: pb.IChangeBgmCmd): pb.ChangeBgmCmd;

        /**
         * Encodes the specified ChangeBgmCmd message. Does not implicitly {@link pb.ChangeBgmCmd.verify|verify} messages.
         * @param message ChangeBgmCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IChangeBgmCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeBgmCmd message, length delimited. Does not implicitly {@link pb.ChangeBgmCmd.verify|verify} messages.
         * @param message ChangeBgmCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IChangeBgmCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeBgmCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeBgmCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ChangeBgmCmd;

        /**
         * Decodes a ChangeBgmCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeBgmCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ChangeBgmCmd;

        /**
         * Verifies a ChangeBgmCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeBgmCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeBgmCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.ChangeBgmCmd;

        /**
         * Creates a plain object from a ChangeBgmCmd message. Also converts values to other types if specified.
         * @param message ChangeBgmCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ChangeBgmCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeBgmCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventAllStaffPopupFile. */
    interface IEventAllStaffPopupFile {

        /** EventAllStaffPopupFile Name */
        Name?: (string|null);

        /** EventAllStaffPopupFile Md5 */
        Md5?: (string|null);
    }

    /** Represents an EventAllStaffPopupFile. */
    class EventAllStaffPopupFile implements IEventAllStaffPopupFile {

        /**
         * Constructs a new EventAllStaffPopupFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IEventAllStaffPopupFile);

        /** EventAllStaffPopupFile Name. */
        public Name: string;

        /** EventAllStaffPopupFile Md5. */
        public Md5: string;

        /**
         * Creates a new EventAllStaffPopupFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventAllStaffPopupFile instance
         */
        public static create(properties?: pb.IEventAllStaffPopupFile): pb.EventAllStaffPopupFile;

        /**
         * Encodes the specified EventAllStaffPopupFile message. Does not implicitly {@link pb.EventAllStaffPopupFile.verify|verify} messages.
         * @param message EventAllStaffPopupFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IEventAllStaffPopupFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventAllStaffPopupFile message, length delimited. Does not implicitly {@link pb.EventAllStaffPopupFile.verify|verify} messages.
         * @param message EventAllStaffPopupFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IEventAllStaffPopupFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventAllStaffPopupFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventAllStaffPopupFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.EventAllStaffPopupFile;

        /**
         * Decodes an EventAllStaffPopupFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventAllStaffPopupFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.EventAllStaffPopupFile;

        /**
         * Verifies an EventAllStaffPopupFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventAllStaffPopupFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventAllStaffPopupFile
         */
        public static fromObject(object: { [k: string]: any }): pb.EventAllStaffPopupFile;

        /**
         * Creates a plain object from an EventAllStaffPopupFile message. Also converts values to other types if specified.
         * @param message EventAllStaffPopupFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.EventAllStaffPopupFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventAllStaffPopupFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BroadcastEventSpecialEffectsCmd. */
    interface IBroadcastEventSpecialEffectsCmd {

        /** BroadcastEventSpecialEffectsCmd specialEffectInfo */
        specialEffectInfo?: (pb.IEventAllStaffPopup|null);
    }

    /** Represents a BroadcastEventSpecialEffectsCmd. */
    class BroadcastEventSpecialEffectsCmd implements IBroadcastEventSpecialEffectsCmd {

        /**
         * Constructs a new BroadcastEventSpecialEffectsCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBroadcastEventSpecialEffectsCmd);

        /** BroadcastEventSpecialEffectsCmd specialEffectInfo. */
        public specialEffectInfo?: (pb.IEventAllStaffPopup|null);

        /**
         * Creates a new BroadcastEventSpecialEffectsCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastEventSpecialEffectsCmd instance
         */
        public static create(properties?: pb.IBroadcastEventSpecialEffectsCmd): pb.BroadcastEventSpecialEffectsCmd;

        /**
         * Encodes the specified BroadcastEventSpecialEffectsCmd message. Does not implicitly {@link pb.BroadcastEventSpecialEffectsCmd.verify|verify} messages.
         * @param message BroadcastEventSpecialEffectsCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBroadcastEventSpecialEffectsCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastEventSpecialEffectsCmd message, length delimited. Does not implicitly {@link pb.BroadcastEventSpecialEffectsCmd.verify|verify} messages.
         * @param message BroadcastEventSpecialEffectsCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IBroadcastEventSpecialEffectsCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastEventSpecialEffectsCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastEventSpecialEffectsCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.BroadcastEventSpecialEffectsCmd;

        /**
         * Decodes a BroadcastEventSpecialEffectsCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastEventSpecialEffectsCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.BroadcastEventSpecialEffectsCmd;

        /**
         * Verifies a BroadcastEventSpecialEffectsCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastEventSpecialEffectsCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastEventSpecialEffectsCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.BroadcastEventSpecialEffectsCmd;

        /**
         * Creates a plain object from a BroadcastEventSpecialEffectsCmd message. Also converts values to other types if specified.
         * @param message BroadcastEventSpecialEffectsCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.BroadcastEventSpecialEffectsCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastEventSpecialEffectsCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EventAllStaffPopup. */
    interface IEventAllStaffPopup {

        /** EventAllStaffPopup EventId */
        EventId?: (string|null);

        /** EventAllStaffPopup Name */
        Name?: (string|null);

        /** EventAllStaffPopup Background */
        Background?: (string|null);

        /** EventAllStaffPopup Type */
        Type?: (pb.PopupType|null);

        /** EventAllStaffPopup Content */
        Content?: (string|null);

        /** EventAllStaffPopup File */
        File?: (pb.IEventAllStaffPopupFile|null);

        /** EventAllStaffPopup developerMode */
        developerMode?: (boolean|null);

        /** EventAllStaffPopup Style */
        Style?: (number|null);
    }

    /** Represents an EventAllStaffPopup. */
    class EventAllStaffPopup implements IEventAllStaffPopup {

        /**
         * Constructs a new EventAllStaffPopup.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IEventAllStaffPopup);

        /** EventAllStaffPopup EventId. */
        public EventId: string;

        /** EventAllStaffPopup Name. */
        public Name: string;

        /** EventAllStaffPopup Background. */
        public Background: string;

        /** EventAllStaffPopup Type. */
        public Type: pb.PopupType;

        /** EventAllStaffPopup Content. */
        public Content: string;

        /** EventAllStaffPopup File. */
        public File?: (pb.IEventAllStaffPopupFile|null);

        /** EventAllStaffPopup developerMode. */
        public developerMode: boolean;

        /** EventAllStaffPopup Style. */
        public Style: number;

        /**
         * Creates a new EventAllStaffPopup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EventAllStaffPopup instance
         */
        public static create(properties?: pb.IEventAllStaffPopup): pb.EventAllStaffPopup;

        /**
         * Encodes the specified EventAllStaffPopup message. Does not implicitly {@link pb.EventAllStaffPopup.verify|verify} messages.
         * @param message EventAllStaffPopup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IEventAllStaffPopup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EventAllStaffPopup message, length delimited. Does not implicitly {@link pb.EventAllStaffPopup.verify|verify} messages.
         * @param message EventAllStaffPopup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IEventAllStaffPopup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EventAllStaffPopup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EventAllStaffPopup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.EventAllStaffPopup;

        /**
         * Decodes an EventAllStaffPopup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EventAllStaffPopup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.EventAllStaffPopup;

        /**
         * Verifies an EventAllStaffPopup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EventAllStaffPopup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EventAllStaffPopup
         */
        public static fromObject(object: { [k: string]: any }): pb.EventAllStaffPopup;

        /**
         * Creates a plain object from an EventAllStaffPopup message. Also converts values to other types if specified.
         * @param message EventAllStaffPopup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.EventAllStaffPopup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EventAllStaffPopup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetPlayerInfoCmd. */
    interface IGetPlayerInfoCmd {

        /** GetPlayerInfoCmd eventId */
        eventId?: (string|null);

        /** GetPlayerInfoCmd spaceId */
        spaceId?: (string|null);

        /** GetPlayerInfoCmd pidArr */
        pidArr?: (string[]|null);
    }

    /** Represents a GetPlayerInfoCmd. */
    class GetPlayerInfoCmd implements IGetPlayerInfoCmd {

        /**
         * Constructs a new GetPlayerInfoCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetPlayerInfoCmd);

        /** GetPlayerInfoCmd eventId. */
        public eventId: string;

        /** GetPlayerInfoCmd spaceId. */
        public spaceId: string;

        /** GetPlayerInfoCmd pidArr. */
        public pidArr: string[];

        /**
         * Creates a new GetPlayerInfoCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetPlayerInfoCmd instance
         */
        public static create(properties?: pb.IGetPlayerInfoCmd): pb.GetPlayerInfoCmd;

        /**
         * Encodes the specified GetPlayerInfoCmd message. Does not implicitly {@link pb.GetPlayerInfoCmd.verify|verify} messages.
         * @param message GetPlayerInfoCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetPlayerInfoCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetPlayerInfoCmd message, length delimited. Does not implicitly {@link pb.GetPlayerInfoCmd.verify|verify} messages.
         * @param message GetPlayerInfoCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGetPlayerInfoCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetPlayerInfoCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetPlayerInfoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetPlayerInfoCmd;

        /**
         * Decodes a GetPlayerInfoCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetPlayerInfoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GetPlayerInfoCmd;

        /**
         * Verifies a GetPlayerInfoCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetPlayerInfoCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetPlayerInfoCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.GetPlayerInfoCmd;

        /**
         * Creates a plain object from a GetPlayerInfoCmd message. Also converts values to other types if specified.
         * @param message GetPlayerInfoCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GetPlayerInfoCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetPlayerInfoCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerPositionInfos. */
    interface IPlayerPositionInfos {

        /** PlayerPositionInfos positionArr */
        positionArr?: (pb.IPosition[]|null);
    }

    /** Represents a PlayerPositionInfos. */
    class PlayerPositionInfos implements IPlayerPositionInfos {

        /**
         * Constructs a new PlayerPositionInfos.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPlayerPositionInfos);

        /** PlayerPositionInfos positionArr. */
        public positionArr: pb.IPosition[];

        /**
         * Creates a new PlayerPositionInfos instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerPositionInfos instance
         */
        public static create(properties?: pb.IPlayerPositionInfos): pb.PlayerPositionInfos;

        /**
         * Encodes the specified PlayerPositionInfos message. Does not implicitly {@link pb.PlayerPositionInfos.verify|verify} messages.
         * @param message PlayerPositionInfos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPlayerPositionInfos, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerPositionInfos message, length delimited. Does not implicitly {@link pb.PlayerPositionInfos.verify|verify} messages.
         * @param message PlayerPositionInfos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPlayerPositionInfos, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerPositionInfos message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerPositionInfos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PlayerPositionInfos;

        /**
         * Decodes a PlayerPositionInfos message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerPositionInfos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PlayerPositionInfos;

        /**
         * Verifies a PlayerPositionInfos message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerPositionInfos message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerPositionInfos
         */
        public static fromObject(object: { [k: string]: any }): pb.PlayerPositionInfos;

        /**
         * Creates a plain object from a PlayerPositionInfos message. Also converts values to other types if specified.
         * @param message PlayerPositionInfos
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PlayerPositionInfos, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerPositionInfos to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangePlayerPositionCmd. */
    interface IChangePlayerPositionCmd {

        /** ChangePlayerPositionCmd eventId */
        eventId?: (string|null);

        /** ChangePlayerPositionCmd spaceId */
        spaceId?: (string|null);

        /** ChangePlayerPositionCmd pid */
        pid?: (string|null);

        /** ChangePlayerPositionCmd x */
        x?: (number|null);

        /** ChangePlayerPositionCmd y */
        y?: (number|null);
    }

    /** Represents a ChangePlayerPositionCmd. */
    class ChangePlayerPositionCmd implements IChangePlayerPositionCmd {

        /**
         * Constructs a new ChangePlayerPositionCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IChangePlayerPositionCmd);

        /** ChangePlayerPositionCmd eventId. */
        public eventId: string;

        /** ChangePlayerPositionCmd spaceId. */
        public spaceId: string;

        /** ChangePlayerPositionCmd pid. */
        public pid: string;

        /** ChangePlayerPositionCmd x. */
        public x: number;

        /** ChangePlayerPositionCmd y. */
        public y: number;

        /**
         * Creates a new ChangePlayerPositionCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangePlayerPositionCmd instance
         */
        public static create(properties?: pb.IChangePlayerPositionCmd): pb.ChangePlayerPositionCmd;

        /**
         * Encodes the specified ChangePlayerPositionCmd message. Does not implicitly {@link pb.ChangePlayerPositionCmd.verify|verify} messages.
         * @param message ChangePlayerPositionCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IChangePlayerPositionCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangePlayerPositionCmd message, length delimited. Does not implicitly {@link pb.ChangePlayerPositionCmd.verify|verify} messages.
         * @param message ChangePlayerPositionCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IChangePlayerPositionCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangePlayerPositionCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangePlayerPositionCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ChangePlayerPositionCmd;

        /**
         * Decodes a ChangePlayerPositionCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangePlayerPositionCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ChangePlayerPositionCmd;

        /**
         * Verifies a ChangePlayerPositionCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangePlayerPositionCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangePlayerPositionCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.ChangePlayerPositionCmd;

        /**
         * Creates a plain object from a ChangePlayerPositionCmd message. Also converts values to other types if specified.
         * @param message ChangePlayerPositionCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ChangePlayerPositionCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangePlayerPositionCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangePlayerDirectionCmd. */
    interface IChangePlayerDirectionCmd {

        /** ChangePlayerDirectionCmd eventId */
        eventId?: (string|null);

        /** ChangePlayerDirectionCmd spaceId */
        spaceId?: (string|null);

        /** ChangePlayerDirectionCmd pid */
        pid?: (string|null);

        /** ChangePlayerDirectionCmd direction */
        direction?: (pb.DirectionType|null);
    }

    /** Represents a ChangePlayerDirectionCmd. */
    class ChangePlayerDirectionCmd implements IChangePlayerDirectionCmd {

        /**
         * Constructs a new ChangePlayerDirectionCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IChangePlayerDirectionCmd);

        /** ChangePlayerDirectionCmd eventId. */
        public eventId: string;

        /** ChangePlayerDirectionCmd spaceId. */
        public spaceId: string;

        /** ChangePlayerDirectionCmd pid. */
        public pid: string;

        /** ChangePlayerDirectionCmd direction. */
        public direction: pb.DirectionType;

        /**
         * Creates a new ChangePlayerDirectionCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangePlayerDirectionCmd instance
         */
        public static create(properties?: pb.IChangePlayerDirectionCmd): pb.ChangePlayerDirectionCmd;

        /**
         * Encodes the specified ChangePlayerDirectionCmd message. Does not implicitly {@link pb.ChangePlayerDirectionCmd.verify|verify} messages.
         * @param message ChangePlayerDirectionCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IChangePlayerDirectionCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangePlayerDirectionCmd message, length delimited. Does not implicitly {@link pb.ChangePlayerDirectionCmd.verify|verify} messages.
         * @param message ChangePlayerDirectionCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IChangePlayerDirectionCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangePlayerDirectionCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangePlayerDirectionCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ChangePlayerDirectionCmd;

        /**
         * Decodes a ChangePlayerDirectionCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangePlayerDirectionCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ChangePlayerDirectionCmd;

        /**
         * Verifies a ChangePlayerDirectionCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangePlayerDirectionCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangePlayerDirectionCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.ChangePlayerDirectionCmd;

        /**
         * Creates a plain object from a ChangePlayerDirectionCmd message. Also converts values to other types if specified.
         * @param message ChangePlayerDirectionCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ChangePlayerDirectionCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangePlayerDirectionCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangePlayerAnimationCmd. */
    interface IChangePlayerAnimationCmd {

        /** ChangePlayerAnimationCmd eventId */
        eventId?: (string|null);

        /** ChangePlayerAnimationCmd spaceId */
        spaceId?: (string|null);

        /** ChangePlayerAnimationCmd pid */
        pid?: (string|null);

        /** ChangePlayerAnimationCmd animation */
        animation?: (pb.AnimationType|null);
    }

    /** Represents a ChangePlayerAnimationCmd. */
    class ChangePlayerAnimationCmd implements IChangePlayerAnimationCmd {

        /**
         * Constructs a new ChangePlayerAnimationCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IChangePlayerAnimationCmd);

        /** ChangePlayerAnimationCmd eventId. */
        public eventId: string;

        /** ChangePlayerAnimationCmd spaceId. */
        public spaceId: string;

        /** ChangePlayerAnimationCmd pid. */
        public pid: string;

        /** ChangePlayerAnimationCmd animation. */
        public animation: pb.AnimationType;

        /**
         * Creates a new ChangePlayerAnimationCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangePlayerAnimationCmd instance
         */
        public static create(properties?: pb.IChangePlayerAnimationCmd): pb.ChangePlayerAnimationCmd;

        /**
         * Encodes the specified ChangePlayerAnimationCmd message. Does not implicitly {@link pb.ChangePlayerAnimationCmd.verify|verify} messages.
         * @param message ChangePlayerAnimationCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IChangePlayerAnimationCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangePlayerAnimationCmd message, length delimited. Does not implicitly {@link pb.ChangePlayerAnimationCmd.verify|verify} messages.
         * @param message ChangePlayerAnimationCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IChangePlayerAnimationCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangePlayerAnimationCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangePlayerAnimationCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ChangePlayerAnimationCmd;

        /**
         * Decodes a ChangePlayerAnimationCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangePlayerAnimationCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ChangePlayerAnimationCmd;

        /**
         * Verifies a ChangePlayerAnimationCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangePlayerAnimationCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangePlayerAnimationCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.ChangePlayerAnimationCmd;

        /**
         * Creates a plain object from a ChangePlayerAnimationCmd message. Also converts values to other types if specified.
         * @param message ChangePlayerAnimationCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ChangePlayerAnimationCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangePlayerAnimationCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangePlayerMoveModeCmd. */
    interface IChangePlayerMoveModeCmd {

        /** ChangePlayerMoveModeCmd eventId */
        eventId?: (string|null);

        /** ChangePlayerMoveModeCmd spaceId */
        spaceId?: (string|null);

        /** ChangePlayerMoveModeCmd pid */
        pid?: (string|null);

        /** ChangePlayerMoveModeCmd moveMode */
        moveMode?: (pb.MoveMode|null);
    }

    /** Represents a ChangePlayerMoveModeCmd. */
    class ChangePlayerMoveModeCmd implements IChangePlayerMoveModeCmd {

        /**
         * Constructs a new ChangePlayerMoveModeCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IChangePlayerMoveModeCmd);

        /** ChangePlayerMoveModeCmd eventId. */
        public eventId: string;

        /** ChangePlayerMoveModeCmd spaceId. */
        public spaceId: string;

        /** ChangePlayerMoveModeCmd pid. */
        public pid: string;

        /** ChangePlayerMoveModeCmd moveMode. */
        public moveMode: pb.MoveMode;

        /**
         * Creates a new ChangePlayerMoveModeCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangePlayerMoveModeCmd instance
         */
        public static create(properties?: pb.IChangePlayerMoveModeCmd): pb.ChangePlayerMoveModeCmd;

        /**
         * Encodes the specified ChangePlayerMoveModeCmd message. Does not implicitly {@link pb.ChangePlayerMoveModeCmd.verify|verify} messages.
         * @param message ChangePlayerMoveModeCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IChangePlayerMoveModeCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangePlayerMoveModeCmd message, length delimited. Does not implicitly {@link pb.ChangePlayerMoveModeCmd.verify|verify} messages.
         * @param message ChangePlayerMoveModeCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IChangePlayerMoveModeCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangePlayerMoveModeCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangePlayerMoveModeCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ChangePlayerMoveModeCmd;

        /**
         * Decodes a ChangePlayerMoveModeCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangePlayerMoveModeCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ChangePlayerMoveModeCmd;

        /**
         * Verifies a ChangePlayerMoveModeCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangePlayerMoveModeCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangePlayerMoveModeCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.ChangePlayerMoveModeCmd;

        /**
         * Creates a plain object from a ChangePlayerMoveModeCmd message. Also converts values to other types if specified.
         * @param message ChangePlayerMoveModeCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ChangePlayerMoveModeCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangePlayerMoveModeCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangePlayerImageCmd. */
    interface IChangePlayerImageCmd {

        /** ChangePlayerImageCmd eventId */
        eventId?: (string|null);

        /** ChangePlayerImageCmd spaceId */
        spaceId?: (string|null);

        /** ChangePlayerImageCmd pid */
        pid?: (string|null);

        /** ChangePlayerImageCmd image */
        image?: (string|null);
    }

    /** Represents a ChangePlayerImageCmd. */
    class ChangePlayerImageCmd implements IChangePlayerImageCmd {

        /**
         * Constructs a new ChangePlayerImageCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IChangePlayerImageCmd);

        /** ChangePlayerImageCmd eventId. */
        public eventId: string;

        /** ChangePlayerImageCmd spaceId. */
        public spaceId: string;

        /** ChangePlayerImageCmd pid. */
        public pid: string;

        /** ChangePlayerImageCmd image. */
        public image: string;

        /**
         * Creates a new ChangePlayerImageCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangePlayerImageCmd instance
         */
        public static create(properties?: pb.IChangePlayerImageCmd): pb.ChangePlayerImageCmd;

        /**
         * Encodes the specified ChangePlayerImageCmd message. Does not implicitly {@link pb.ChangePlayerImageCmd.verify|verify} messages.
         * @param message ChangePlayerImageCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IChangePlayerImageCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangePlayerImageCmd message, length delimited. Does not implicitly {@link pb.ChangePlayerImageCmd.verify|verify} messages.
         * @param message ChangePlayerImageCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IChangePlayerImageCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangePlayerImageCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangePlayerImageCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ChangePlayerImageCmd;

        /**
         * Decodes a ChangePlayerImageCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangePlayerImageCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ChangePlayerImageCmd;

        /**
         * Verifies a ChangePlayerImageCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangePlayerImageCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangePlayerImageCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.ChangePlayerImageCmd;

        /**
         * Creates a plain object from a ChangePlayerImageCmd message. Also converts values to other types if specified.
         * @param message ChangePlayerImageCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ChangePlayerImageCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangePlayerImageCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangePlayerFollowCmd. */
    interface IChangePlayerFollowCmd {

        /** ChangePlayerFollowCmd eventId */
        eventId?: (string|null);

        /** ChangePlayerFollowCmd spaceId */
        spaceId?: (string|null);

        /** ChangePlayerFollowCmd pid */
        pid?: (string|null);

        /** ChangePlayerFollowCmd followPid */
        followPid?: (string|null);
    }

    /** Represents a ChangePlayerFollowCmd. */
    class ChangePlayerFollowCmd implements IChangePlayerFollowCmd {

        /**
         * Constructs a new ChangePlayerFollowCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IChangePlayerFollowCmd);

        /** ChangePlayerFollowCmd eventId. */
        public eventId: string;

        /** ChangePlayerFollowCmd spaceId. */
        public spaceId: string;

        /** ChangePlayerFollowCmd pid. */
        public pid: string;

        /** ChangePlayerFollowCmd followPid. */
        public followPid: string;

        /**
         * Creates a new ChangePlayerFollowCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangePlayerFollowCmd instance
         */
        public static create(properties?: pb.IChangePlayerFollowCmd): pb.ChangePlayerFollowCmd;

        /**
         * Encodes the specified ChangePlayerFollowCmd message. Does not implicitly {@link pb.ChangePlayerFollowCmd.verify|verify} messages.
         * @param message ChangePlayerFollowCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IChangePlayerFollowCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangePlayerFollowCmd message, length delimited. Does not implicitly {@link pb.ChangePlayerFollowCmd.verify|verify} messages.
         * @param message ChangePlayerFollowCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IChangePlayerFollowCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangePlayerFollowCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangePlayerFollowCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ChangePlayerFollowCmd;

        /**
         * Decodes a ChangePlayerFollowCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangePlayerFollowCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ChangePlayerFollowCmd;

        /**
         * Verifies a ChangePlayerFollowCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangePlayerFollowCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangePlayerFollowCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.ChangePlayerFollowCmd;

        /**
         * Creates a plain object from a ChangePlayerFollowCmd message. Also converts values to other types if specified.
         * @param message ChangePlayerFollowCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ChangePlayerFollowCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangePlayerFollowCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddPlayerListenerCmd. */
    interface IAddPlayerListenerCmd {

        /** AddPlayerListenerCmd eventId */
        eventId?: (string|null);

        /** AddPlayerListenerCmd spaceId */
        spaceId?: (string|null);

        /** AddPlayerListenerCmd listenerId */
        listenerId?: (string|null);

        /** AddPlayerListenerCmd pidArr */
        pidArr?: (string[]|null);

        /** AddPlayerListenerCmd signal */
        signal?: (number|null);
    }

    /** Represents an AddPlayerListenerCmd. */
    class AddPlayerListenerCmd implements IAddPlayerListenerCmd {

        /**
         * Constructs a new AddPlayerListenerCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAddPlayerListenerCmd);

        /** AddPlayerListenerCmd eventId. */
        public eventId: string;

        /** AddPlayerListenerCmd spaceId. */
        public spaceId: string;

        /** AddPlayerListenerCmd listenerId. */
        public listenerId: string;

        /** AddPlayerListenerCmd pidArr. */
        public pidArr: string[];

        /** AddPlayerListenerCmd signal. */
        public signal: number;

        /**
         * Creates a new AddPlayerListenerCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddPlayerListenerCmd instance
         */
        public static create(properties?: pb.IAddPlayerListenerCmd): pb.AddPlayerListenerCmd;

        /**
         * Encodes the specified AddPlayerListenerCmd message. Does not implicitly {@link pb.AddPlayerListenerCmd.verify|verify} messages.
         * @param message AddPlayerListenerCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAddPlayerListenerCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddPlayerListenerCmd message, length delimited. Does not implicitly {@link pb.AddPlayerListenerCmd.verify|verify} messages.
         * @param message AddPlayerListenerCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IAddPlayerListenerCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddPlayerListenerCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddPlayerListenerCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AddPlayerListenerCmd;

        /**
         * Decodes an AddPlayerListenerCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddPlayerListenerCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.AddPlayerListenerCmd;

        /**
         * Verifies an AddPlayerListenerCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddPlayerListenerCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddPlayerListenerCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.AddPlayerListenerCmd;

        /**
         * Creates a plain object from an AddPlayerListenerCmd message. Also converts values to other types if specified.
         * @param message AddPlayerListenerCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.AddPlayerListenerCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddPlayerListenerCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RemovePlayerListenerCmd. */
    interface IRemovePlayerListenerCmd {

        /** RemovePlayerListenerCmd eventId */
        eventId?: (string|null);

        /** RemovePlayerListenerCmd spaceId */
        spaceId?: (string|null);

        /** RemovePlayerListenerCmd listenerId */
        listenerId?: (string|null);

        /** RemovePlayerListenerCmd pidArr */
        pidArr?: (string[]|null);
    }

    /** Represents a RemovePlayerListenerCmd. */
    class RemovePlayerListenerCmd implements IRemovePlayerListenerCmd {

        /**
         * Constructs a new RemovePlayerListenerCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRemovePlayerListenerCmd);

        /** RemovePlayerListenerCmd eventId. */
        public eventId: string;

        /** RemovePlayerListenerCmd spaceId. */
        public spaceId: string;

        /** RemovePlayerListenerCmd listenerId. */
        public listenerId: string;

        /** RemovePlayerListenerCmd pidArr. */
        public pidArr: string[];

        /**
         * Creates a new RemovePlayerListenerCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemovePlayerListenerCmd instance
         */
        public static create(properties?: pb.IRemovePlayerListenerCmd): pb.RemovePlayerListenerCmd;

        /**
         * Encodes the specified RemovePlayerListenerCmd message. Does not implicitly {@link pb.RemovePlayerListenerCmd.verify|verify} messages.
         * @param message RemovePlayerListenerCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRemovePlayerListenerCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RemovePlayerListenerCmd message, length delimited. Does not implicitly {@link pb.RemovePlayerListenerCmd.verify|verify} messages.
         * @param message RemovePlayerListenerCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRemovePlayerListenerCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemovePlayerListenerCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemovePlayerListenerCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RemovePlayerListenerCmd;

        /**
         * Decodes a RemovePlayerListenerCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemovePlayerListenerCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RemovePlayerListenerCmd;

        /**
         * Verifies a RemovePlayerListenerCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RemovePlayerListenerCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemovePlayerListenerCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.RemovePlayerListenerCmd;

        /**
         * Creates a plain object from a RemovePlayerListenerCmd message. Also converts values to other types if specified.
         * @param message RemovePlayerListenerCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RemovePlayerListenerCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemovePlayerListenerCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MapPoint. */
    interface IMapPoint {

        /** MapPoint x */
        x?: (number|null);

        /** MapPoint y */
        y?: (number|null);
    }

    /** Represents a MapPoint. */
    class MapPoint implements IMapPoint {

        /**
         * Constructs a new MapPoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IMapPoint);

        /** MapPoint x. */
        public x: number;

        /** MapPoint y. */
        public y: number;

        /**
         * Creates a new MapPoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MapPoint instance
         */
        public static create(properties?: pb.IMapPoint): pb.MapPoint;

        /**
         * Encodes the specified MapPoint message. Does not implicitly {@link pb.MapPoint.verify|verify} messages.
         * @param message MapPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IMapPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MapPoint message, length delimited. Does not implicitly {@link pb.MapPoint.verify|verify} messages.
         * @param message MapPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IMapPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MapPoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MapPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.MapPoint;

        /**
         * Decodes a MapPoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MapPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.MapPoint;

        /**
         * Verifies a MapPoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MapPoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MapPoint
         */
        public static fromObject(object: { [k: string]: any }): pb.MapPoint;

        /**
         * Creates a plain object from a MapPoint message. Also converts values to other types if specified.
         * @param message MapPoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.MapPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MapPoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BirthPoint. */
    interface IBirthPoint {

        /** BirthPoint x */
        x?: (number|null);

        /** BirthPoint y */
        y?: (number|null);

        /** BirthPoint weight */
        weight?: (number|null);
    }

    /** Represents a BirthPoint. */
    class BirthPoint implements IBirthPoint {

        /**
         * Constructs a new BirthPoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IBirthPoint);

        /** BirthPoint x. */
        public x: number;

        /** BirthPoint y. */
        public y: number;

        /** BirthPoint weight. */
        public weight: number;

        /**
         * Creates a new BirthPoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BirthPoint instance
         */
        public static create(properties?: pb.IBirthPoint): pb.BirthPoint;

        /**
         * Encodes the specified BirthPoint message. Does not implicitly {@link pb.BirthPoint.verify|verify} messages.
         * @param message BirthPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IBirthPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BirthPoint message, length delimited. Does not implicitly {@link pb.BirthPoint.verify|verify} messages.
         * @param message BirthPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IBirthPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BirthPoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BirthPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.BirthPoint;

        /**
         * Decodes a BirthPoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BirthPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.BirthPoint;

        /**
         * Verifies a BirthPoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BirthPoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BirthPoint
         */
        public static fromObject(object: { [k: string]: any }): pb.BirthPoint;

        /**
         * Creates a plain object from a BirthPoint message. Also converts values to other types if specified.
         * @param message BirthPoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.BirthPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BirthPoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PrivateSpace. */
    interface IPrivateSpace {

        /** PrivateSpace privateOrder */
        privateOrder?: (number|null);

        /** PrivateSpace gridArr */
        gridArr?: (number[]|null);
    }

    /** Represents a PrivateSpace. */
    class PrivateSpace implements IPrivateSpace {

        /**
         * Constructs a new PrivateSpace.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPrivateSpace);

        /** PrivateSpace privateOrder. */
        public privateOrder: number;

        /** PrivateSpace gridArr. */
        public gridArr: number[];

        /**
         * Creates a new PrivateSpace instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivateSpace instance
         */
        public static create(properties?: pb.IPrivateSpace): pb.PrivateSpace;

        /**
         * Encodes the specified PrivateSpace message. Does not implicitly {@link pb.PrivateSpace.verify|verify} messages.
         * @param message PrivateSpace message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPrivateSpace, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrivateSpace message, length delimited. Does not implicitly {@link pb.PrivateSpace.verify|verify} messages.
         * @param message PrivateSpace message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPrivateSpace, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivateSpace message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrivateSpace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PrivateSpace;

        /**
         * Decodes a PrivateSpace message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrivateSpace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PrivateSpace;

        /**
         * Verifies a PrivateSpace message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PrivateSpace message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrivateSpace
         */
        public static fromObject(object: { [k: string]: any }): pb.PrivateSpace;

        /**
         * Creates a plain object from a PrivateSpace message. Also converts values to other types if specified.
         * @param message PrivateSpace
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PrivateSpace, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrivateSpace to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LandMark. */
    interface ILandMark {

        /** LandMark id */
        id?: (string|null);

        /** LandMark name */
        name?: (string|null);

        /** LandMark x */
        x?: (number|null);

        /** LandMark y */
        y?: (number|null);
    }

    /** Represents a LandMark. */
    class LandMark implements ILandMark {

        /**
         * Constructs a new LandMark.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ILandMark);

        /** LandMark id. */
        public id: string;

        /** LandMark name. */
        public name: string;

        /** LandMark x. */
        public x: number;

        /** LandMark y. */
        public y: number;

        /**
         * Creates a new LandMark instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LandMark instance
         */
        public static create(properties?: pb.ILandMark): pb.LandMark;

        /**
         * Encodes the specified LandMark message. Does not implicitly {@link pb.LandMark.verify|verify} messages.
         * @param message LandMark message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ILandMark, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LandMark message, length delimited. Does not implicitly {@link pb.LandMark.verify|verify} messages.
         * @param message LandMark message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ILandMark, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LandMark message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LandMark
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.LandMark;

        /**
         * Decodes a LandMark message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LandMark
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.LandMark;

        /**
         * Verifies a LandMark message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LandMark message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LandMark
         */
        public static fromObject(object: { [k: string]: any }): pb.LandMark;

        /**
         * Creates a plain object from a LandMark message. Also converts values to other types if specified.
         * @param message LandMark
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.LandMark, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LandMark to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PortalTarget. */
    interface IPortalTarget {

        /** PortalTarget eventId */
        eventId?: (string|null);

        /** PortalTarget spaceId */
        spaceId?: (string|null);

        /** PortalTarget targetType */
        targetType?: (number|null);

        /** PortalTarget anchorId */
        anchorId?: (string|null);

        /** PortalTarget anchorName */
        anchorName?: (string|null);
    }

    /** Represents a PortalTarget. */
    class PortalTarget implements IPortalTarget {

        /**
         * Constructs a new PortalTarget.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPortalTarget);

        /** PortalTarget eventId. */
        public eventId: string;

        /** PortalTarget spaceId. */
        public spaceId: string;

        /** PortalTarget targetType. */
        public targetType: number;

        /** PortalTarget anchorId. */
        public anchorId: string;

        /** PortalTarget anchorName. */
        public anchorName: string;

        /**
         * Creates a new PortalTarget instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PortalTarget instance
         */
        public static create(properties?: pb.IPortalTarget): pb.PortalTarget;

        /**
         * Encodes the specified PortalTarget message. Does not implicitly {@link pb.PortalTarget.verify|verify} messages.
         * @param message PortalTarget message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPortalTarget, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PortalTarget message, length delimited. Does not implicitly {@link pb.PortalTarget.verify|verify} messages.
         * @param message PortalTarget message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPortalTarget, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PortalTarget message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PortalTarget
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PortalTarget;

        /**
         * Decodes a PortalTarget message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PortalTarget
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PortalTarget;

        /**
         * Verifies a PortalTarget message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PortalTarget message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PortalTarget
         */
        public static fromObject(object: { [k: string]: any }): pb.PortalTarget;

        /**
         * Creates a plain object from a PortalTarget message. Also converts values to other types if specified.
         * @param message PortalTarget
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PortalTarget, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PortalTarget to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Portal. */
    interface IPortal {

        /** Portal locations */
        locations?: (pb.IMapPoint[]|null);

        /** Portal portTarget */
        portTarget?: (pb.IPortalTarget|null);

        /** Portal skipConfirmation */
        skipConfirmation?: (boolean|null);
    }

    /** Represents a Portal. */
    class Portal implements IPortal {

        /**
         * Constructs a new Portal.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPortal);

        /** Portal locations. */
        public locations: pb.IMapPoint[];

        /** Portal portTarget. */
        public portTarget?: (pb.IPortalTarget|null);

        /** Portal skipConfirmation. */
        public skipConfirmation: boolean;

        /**
         * Creates a new Portal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Portal instance
         */
        public static create(properties?: pb.IPortal): pb.Portal;

        /**
         * Encodes the specified Portal message. Does not implicitly {@link pb.Portal.verify|verify} messages.
         * @param message Portal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPortal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Portal message, length delimited. Does not implicitly {@link pb.Portal.verify|verify} messages.
         * @param message Portal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPortal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Portal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Portal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Portal;

        /**
         * Decodes a Portal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Portal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Portal;

        /**
         * Verifies a Portal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Portal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Portal
         */
        public static fromObject(object: { [k: string]: any }): pb.Portal;

        /**
         * Creates a plain object from a Portal message. Also converts values to other types if specified.
         * @param message Portal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Portal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Portal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GridMaterial. */
    interface IGridMaterial {

        /** GridMaterial grid */
        grid?: (number|null);

        /** GridMaterial materialType */
        materialType?: (pb.MapMaterialType|null);

        /** GridMaterial content */
        content?: (string|null);
    }

    /** Represents a GridMaterial. */
    class GridMaterial implements IGridMaterial {

        /**
         * Constructs a new GridMaterial.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGridMaterial);

        /** GridMaterial grid. */
        public grid: number;

        /** GridMaterial materialType. */
        public materialType: pb.MapMaterialType;

        /** GridMaterial content. */
        public content: string;

        /**
         * Creates a new GridMaterial instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GridMaterial instance
         */
        public static create(properties?: pb.IGridMaterial): pb.GridMaterial;

        /**
         * Encodes the specified GridMaterial message. Does not implicitly {@link pb.GridMaterial.verify|verify} messages.
         * @param message GridMaterial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGridMaterial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GridMaterial message, length delimited. Does not implicitly {@link pb.GridMaterial.verify|verify} messages.
         * @param message GridMaterial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGridMaterial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GridMaterial message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GridMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GridMaterial;

        /**
         * Decodes a GridMaterial message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GridMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GridMaterial;

        /**
         * Verifies a GridMaterial message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GridMaterial message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GridMaterial
         */
        public static fromObject(object: { [k: string]: any }): pb.GridMaterial;

        /**
         * Creates a plain object from a GridMaterial message. Also converts values to other types if specified.
         * @param message GridMaterial
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GridMaterial, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GridMaterial to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SpaceMapInfo. */
    interface ISpaceMapInfo {

        /** SpaceMapInfo addBirthPointArr */
        addBirthPointArr?: (pb.IMapPoint[]|null);

        /** SpaceMapInfo removeBirthPointArr */
        removeBirthPointArr?: (pb.IMapPoint[]|null);

        /** SpaceMapInfo addObstacleArr */
        addObstacleArr?: (number[]|null);

        /** SpaceMapInfo removeObstacleArr */
        removeObstacleArr?: (number[]|null);

        /** SpaceMapInfo addLandMarkArr */
        addLandMarkArr?: (pb.ILandMark[]|null);

        /** SpaceMapInfo removeLandMarkArr */
        removeLandMarkArr?: (string[]|null);

        /** SpaceMapInfo addPortalArr */
        addPortalArr?: (pb.IPortal[]|null);

        /** SpaceMapInfo removePortalArr */
        removePortalArr?: (pb.IMapPoint[]|null);

        /** SpaceMapInfo gridMaterialArr */
        gridMaterialArr?: (pb.IGridMaterial[]|null);
    }

    /** Represents a SpaceMapInfo. */
    class SpaceMapInfo implements ISpaceMapInfo {

        /**
         * Constructs a new SpaceMapInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISpaceMapInfo);

        /** SpaceMapInfo addBirthPointArr. */
        public addBirthPointArr: pb.IMapPoint[];

        /** SpaceMapInfo removeBirthPointArr. */
        public removeBirthPointArr: pb.IMapPoint[];

        /** SpaceMapInfo addObstacleArr. */
        public addObstacleArr: number[];

        /** SpaceMapInfo removeObstacleArr. */
        public removeObstacleArr: number[];

        /** SpaceMapInfo addLandMarkArr. */
        public addLandMarkArr: pb.ILandMark[];

        /** SpaceMapInfo removeLandMarkArr. */
        public removeLandMarkArr: string[];

        /** SpaceMapInfo addPortalArr. */
        public addPortalArr: pb.IPortal[];

        /** SpaceMapInfo removePortalArr. */
        public removePortalArr: pb.IMapPoint[];

        /** SpaceMapInfo gridMaterialArr. */
        public gridMaterialArr: pb.IGridMaterial[];

        /**
         * Creates a new SpaceMapInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SpaceMapInfo instance
         */
        public static create(properties?: pb.ISpaceMapInfo): pb.SpaceMapInfo;

        /**
         * Encodes the specified SpaceMapInfo message. Does not implicitly {@link pb.SpaceMapInfo.verify|verify} messages.
         * @param message SpaceMapInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISpaceMapInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SpaceMapInfo message, length delimited. Does not implicitly {@link pb.SpaceMapInfo.verify|verify} messages.
         * @param message SpaceMapInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISpaceMapInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpaceMapInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SpaceMapInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SpaceMapInfo;

        /**
         * Decodes a SpaceMapInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SpaceMapInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SpaceMapInfo;

        /**
         * Verifies a SpaceMapInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SpaceMapInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SpaceMapInfo
         */
        public static fromObject(object: { [k: string]: any }): pb.SpaceMapInfo;

        /**
         * Creates a plain object from a SpaceMapInfo message. Also converts values to other types if specified.
         * @param message SpaceMapInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SpaceMapInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SpaceMapInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetSpaceMapInfoCmd. */
    interface IGetSpaceMapInfoCmd {

        /** GetSpaceMapInfoCmd eventId */
        eventId?: (string|null);

        /** GetSpaceMapInfoCmd spaceId */
        spaceId?: (string|null);
    }

    /** Represents a GetSpaceMapInfoCmd. */
    class GetSpaceMapInfoCmd implements IGetSpaceMapInfoCmd {

        /**
         * Constructs a new GetSpaceMapInfoCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetSpaceMapInfoCmd);

        /** GetSpaceMapInfoCmd eventId. */
        public eventId: string;

        /** GetSpaceMapInfoCmd spaceId. */
        public spaceId: string;

        /**
         * Creates a new GetSpaceMapInfoCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSpaceMapInfoCmd instance
         */
        public static create(properties?: pb.IGetSpaceMapInfoCmd): pb.GetSpaceMapInfoCmd;

        /**
         * Encodes the specified GetSpaceMapInfoCmd message. Does not implicitly {@link pb.GetSpaceMapInfoCmd.verify|verify} messages.
         * @param message GetSpaceMapInfoCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetSpaceMapInfoCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetSpaceMapInfoCmd message, length delimited. Does not implicitly {@link pb.GetSpaceMapInfoCmd.verify|verify} messages.
         * @param message GetSpaceMapInfoCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGetSpaceMapInfoCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSpaceMapInfoCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSpaceMapInfoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetSpaceMapInfoCmd;

        /**
         * Decodes a GetSpaceMapInfoCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetSpaceMapInfoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GetSpaceMapInfoCmd;

        /**
         * Verifies a GetSpaceMapInfoCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetSpaceMapInfoCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetSpaceMapInfoCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.GetSpaceMapInfoCmd;

        /**
         * Creates a plain object from a GetSpaceMapInfoCmd message. Also converts values to other types if specified.
         * @param message GetSpaceMapInfoCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GetSpaceMapInfoCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetSpaceMapInfoCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddSpaceMapBirthCmd. */
    interface IAddSpaceMapBirthCmd {

        /** AddSpaceMapBirthCmd eventId */
        eventId?: (string|null);

        /** AddSpaceMapBirthCmd spaceId */
        spaceId?: (string|null);

        /** AddSpaceMapBirthCmd birthPointArr */
        birthPointArr?: (pb.IBirthPoint[]|null);
    }

    /** Represents an AddSpaceMapBirthCmd. */
    class AddSpaceMapBirthCmd implements IAddSpaceMapBirthCmd {

        /**
         * Constructs a new AddSpaceMapBirthCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAddSpaceMapBirthCmd);

        /** AddSpaceMapBirthCmd eventId. */
        public eventId: string;

        /** AddSpaceMapBirthCmd spaceId. */
        public spaceId: string;

        /** AddSpaceMapBirthCmd birthPointArr. */
        public birthPointArr: pb.IBirthPoint[];

        /**
         * Creates a new AddSpaceMapBirthCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddSpaceMapBirthCmd instance
         */
        public static create(properties?: pb.IAddSpaceMapBirthCmd): pb.AddSpaceMapBirthCmd;

        /**
         * Encodes the specified AddSpaceMapBirthCmd message. Does not implicitly {@link pb.AddSpaceMapBirthCmd.verify|verify} messages.
         * @param message AddSpaceMapBirthCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAddSpaceMapBirthCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddSpaceMapBirthCmd message, length delimited. Does not implicitly {@link pb.AddSpaceMapBirthCmd.verify|verify} messages.
         * @param message AddSpaceMapBirthCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IAddSpaceMapBirthCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddSpaceMapBirthCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddSpaceMapBirthCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AddSpaceMapBirthCmd;

        /**
         * Decodes an AddSpaceMapBirthCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddSpaceMapBirthCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.AddSpaceMapBirthCmd;

        /**
         * Verifies an AddSpaceMapBirthCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddSpaceMapBirthCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddSpaceMapBirthCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.AddSpaceMapBirthCmd;

        /**
         * Creates a plain object from an AddSpaceMapBirthCmd message. Also converts values to other types if specified.
         * @param message AddSpaceMapBirthCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.AddSpaceMapBirthCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddSpaceMapBirthCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RemoveSpaceMapBirthCmd. */
    interface IRemoveSpaceMapBirthCmd {

        /** RemoveSpaceMapBirthCmd eventId */
        eventId?: (string|null);

        /** RemoveSpaceMapBirthCmd spaceId */
        spaceId?: (string|null);

        /** RemoveSpaceMapBirthCmd birthPointArr */
        birthPointArr?: (pb.IMapPoint[]|null);
    }

    /** Represents a RemoveSpaceMapBirthCmd. */
    class RemoveSpaceMapBirthCmd implements IRemoveSpaceMapBirthCmd {

        /**
         * Constructs a new RemoveSpaceMapBirthCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRemoveSpaceMapBirthCmd);

        /** RemoveSpaceMapBirthCmd eventId. */
        public eventId: string;

        /** RemoveSpaceMapBirthCmd spaceId. */
        public spaceId: string;

        /** RemoveSpaceMapBirthCmd birthPointArr. */
        public birthPointArr: pb.IMapPoint[];

        /**
         * Creates a new RemoveSpaceMapBirthCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoveSpaceMapBirthCmd instance
         */
        public static create(properties?: pb.IRemoveSpaceMapBirthCmd): pb.RemoveSpaceMapBirthCmd;

        /**
         * Encodes the specified RemoveSpaceMapBirthCmd message. Does not implicitly {@link pb.RemoveSpaceMapBirthCmd.verify|verify} messages.
         * @param message RemoveSpaceMapBirthCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRemoveSpaceMapBirthCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RemoveSpaceMapBirthCmd message, length delimited. Does not implicitly {@link pb.RemoveSpaceMapBirthCmd.verify|verify} messages.
         * @param message RemoveSpaceMapBirthCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRemoveSpaceMapBirthCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoveSpaceMapBirthCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoveSpaceMapBirthCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RemoveSpaceMapBirthCmd;

        /**
         * Decodes a RemoveSpaceMapBirthCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemoveSpaceMapBirthCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RemoveSpaceMapBirthCmd;

        /**
         * Verifies a RemoveSpaceMapBirthCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RemoveSpaceMapBirthCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoveSpaceMapBirthCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.RemoveSpaceMapBirthCmd;

        /**
         * Creates a plain object from a RemoveSpaceMapBirthCmd message. Also converts values to other types if specified.
         * @param message RemoveSpaceMapBirthCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RemoveSpaceMapBirthCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemoveSpaceMapBirthCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddSpaceMapObstacleCmd. */
    interface IAddSpaceMapObstacleCmd {

        /** AddSpaceMapObstacleCmd eventId */
        eventId?: (string|null);

        /** AddSpaceMapObstacleCmd spaceId */
        spaceId?: (string|null);

        /** AddSpaceMapObstacleCmd obstacleArr */
        obstacleArr?: (number[]|null);
    }

    /** Represents an AddSpaceMapObstacleCmd. */
    class AddSpaceMapObstacleCmd implements IAddSpaceMapObstacleCmd {

        /**
         * Constructs a new AddSpaceMapObstacleCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAddSpaceMapObstacleCmd);

        /** AddSpaceMapObstacleCmd eventId. */
        public eventId: string;

        /** AddSpaceMapObstacleCmd spaceId. */
        public spaceId: string;

        /** AddSpaceMapObstacleCmd obstacleArr. */
        public obstacleArr: number[];

        /**
         * Creates a new AddSpaceMapObstacleCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddSpaceMapObstacleCmd instance
         */
        public static create(properties?: pb.IAddSpaceMapObstacleCmd): pb.AddSpaceMapObstacleCmd;

        /**
         * Encodes the specified AddSpaceMapObstacleCmd message. Does not implicitly {@link pb.AddSpaceMapObstacleCmd.verify|verify} messages.
         * @param message AddSpaceMapObstacleCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAddSpaceMapObstacleCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddSpaceMapObstacleCmd message, length delimited. Does not implicitly {@link pb.AddSpaceMapObstacleCmd.verify|verify} messages.
         * @param message AddSpaceMapObstacleCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IAddSpaceMapObstacleCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddSpaceMapObstacleCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddSpaceMapObstacleCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AddSpaceMapObstacleCmd;

        /**
         * Decodes an AddSpaceMapObstacleCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddSpaceMapObstacleCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.AddSpaceMapObstacleCmd;

        /**
         * Verifies an AddSpaceMapObstacleCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddSpaceMapObstacleCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddSpaceMapObstacleCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.AddSpaceMapObstacleCmd;

        /**
         * Creates a plain object from an AddSpaceMapObstacleCmd message. Also converts values to other types if specified.
         * @param message AddSpaceMapObstacleCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.AddSpaceMapObstacleCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddSpaceMapObstacleCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RemoveSpaceMapObstacleCmd. */
    interface IRemoveSpaceMapObstacleCmd {

        /** RemoveSpaceMapObstacleCmd eventId */
        eventId?: (string|null);

        /** RemoveSpaceMapObstacleCmd spaceId */
        spaceId?: (string|null);

        /** RemoveSpaceMapObstacleCmd obstacleArr */
        obstacleArr?: (number[]|null);
    }

    /** Represents a RemoveSpaceMapObstacleCmd. */
    class RemoveSpaceMapObstacleCmd implements IRemoveSpaceMapObstacleCmd {

        /**
         * Constructs a new RemoveSpaceMapObstacleCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRemoveSpaceMapObstacleCmd);

        /** RemoveSpaceMapObstacleCmd eventId. */
        public eventId: string;

        /** RemoveSpaceMapObstacleCmd spaceId. */
        public spaceId: string;

        /** RemoveSpaceMapObstacleCmd obstacleArr. */
        public obstacleArr: number[];

        /**
         * Creates a new RemoveSpaceMapObstacleCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoveSpaceMapObstacleCmd instance
         */
        public static create(properties?: pb.IRemoveSpaceMapObstacleCmd): pb.RemoveSpaceMapObstacleCmd;

        /**
         * Encodes the specified RemoveSpaceMapObstacleCmd message. Does not implicitly {@link pb.RemoveSpaceMapObstacleCmd.verify|verify} messages.
         * @param message RemoveSpaceMapObstacleCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRemoveSpaceMapObstacleCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RemoveSpaceMapObstacleCmd message, length delimited. Does not implicitly {@link pb.RemoveSpaceMapObstacleCmd.verify|verify} messages.
         * @param message RemoveSpaceMapObstacleCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRemoveSpaceMapObstacleCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoveSpaceMapObstacleCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoveSpaceMapObstacleCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RemoveSpaceMapObstacleCmd;

        /**
         * Decodes a RemoveSpaceMapObstacleCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemoveSpaceMapObstacleCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RemoveSpaceMapObstacleCmd;

        /**
         * Verifies a RemoveSpaceMapObstacleCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RemoveSpaceMapObstacleCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoveSpaceMapObstacleCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.RemoveSpaceMapObstacleCmd;

        /**
         * Creates a plain object from a RemoveSpaceMapObstacleCmd message. Also converts values to other types if specified.
         * @param message RemoveSpaceMapObstacleCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RemoveSpaceMapObstacleCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemoveSpaceMapObstacleCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddSpaceMapLandMarkCmd. */
    interface IAddSpaceMapLandMarkCmd {

        /** AddSpaceMapLandMarkCmd eventId */
        eventId?: (string|null);

        /** AddSpaceMapLandMarkCmd spaceId */
        spaceId?: (string|null);

        /** AddSpaceMapLandMarkCmd landMarkArr */
        landMarkArr?: (pb.ILandMark[]|null);
    }

    /** Represents an AddSpaceMapLandMarkCmd. */
    class AddSpaceMapLandMarkCmd implements IAddSpaceMapLandMarkCmd {

        /**
         * Constructs a new AddSpaceMapLandMarkCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAddSpaceMapLandMarkCmd);

        /** AddSpaceMapLandMarkCmd eventId. */
        public eventId: string;

        /** AddSpaceMapLandMarkCmd spaceId. */
        public spaceId: string;

        /** AddSpaceMapLandMarkCmd landMarkArr. */
        public landMarkArr: pb.ILandMark[];

        /**
         * Creates a new AddSpaceMapLandMarkCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddSpaceMapLandMarkCmd instance
         */
        public static create(properties?: pb.IAddSpaceMapLandMarkCmd): pb.AddSpaceMapLandMarkCmd;

        /**
         * Encodes the specified AddSpaceMapLandMarkCmd message. Does not implicitly {@link pb.AddSpaceMapLandMarkCmd.verify|verify} messages.
         * @param message AddSpaceMapLandMarkCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAddSpaceMapLandMarkCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddSpaceMapLandMarkCmd message, length delimited. Does not implicitly {@link pb.AddSpaceMapLandMarkCmd.verify|verify} messages.
         * @param message AddSpaceMapLandMarkCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IAddSpaceMapLandMarkCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddSpaceMapLandMarkCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddSpaceMapLandMarkCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AddSpaceMapLandMarkCmd;

        /**
         * Decodes an AddSpaceMapLandMarkCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddSpaceMapLandMarkCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.AddSpaceMapLandMarkCmd;

        /**
         * Verifies an AddSpaceMapLandMarkCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddSpaceMapLandMarkCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddSpaceMapLandMarkCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.AddSpaceMapLandMarkCmd;

        /**
         * Creates a plain object from an AddSpaceMapLandMarkCmd message. Also converts values to other types if specified.
         * @param message AddSpaceMapLandMarkCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.AddSpaceMapLandMarkCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddSpaceMapLandMarkCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RemoveSpaceMapLandMarkCmd. */
    interface IRemoveSpaceMapLandMarkCmd {

        /** RemoveSpaceMapLandMarkCmd eventId */
        eventId?: (string|null);

        /** RemoveSpaceMapLandMarkCmd spaceId */
        spaceId?: (string|null);

        /** RemoveSpaceMapLandMarkCmd landMarkIdArr */
        landMarkIdArr?: (string[]|null);
    }

    /** Represents a RemoveSpaceMapLandMarkCmd. */
    class RemoveSpaceMapLandMarkCmd implements IRemoveSpaceMapLandMarkCmd {

        /**
         * Constructs a new RemoveSpaceMapLandMarkCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRemoveSpaceMapLandMarkCmd);

        /** RemoveSpaceMapLandMarkCmd eventId. */
        public eventId: string;

        /** RemoveSpaceMapLandMarkCmd spaceId. */
        public spaceId: string;

        /** RemoveSpaceMapLandMarkCmd landMarkIdArr. */
        public landMarkIdArr: string[];

        /**
         * Creates a new RemoveSpaceMapLandMarkCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoveSpaceMapLandMarkCmd instance
         */
        public static create(properties?: pb.IRemoveSpaceMapLandMarkCmd): pb.RemoveSpaceMapLandMarkCmd;

        /**
         * Encodes the specified RemoveSpaceMapLandMarkCmd message. Does not implicitly {@link pb.RemoveSpaceMapLandMarkCmd.verify|verify} messages.
         * @param message RemoveSpaceMapLandMarkCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRemoveSpaceMapLandMarkCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RemoveSpaceMapLandMarkCmd message, length delimited. Does not implicitly {@link pb.RemoveSpaceMapLandMarkCmd.verify|verify} messages.
         * @param message RemoveSpaceMapLandMarkCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRemoveSpaceMapLandMarkCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoveSpaceMapLandMarkCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoveSpaceMapLandMarkCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RemoveSpaceMapLandMarkCmd;

        /**
         * Decodes a RemoveSpaceMapLandMarkCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemoveSpaceMapLandMarkCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RemoveSpaceMapLandMarkCmd;

        /**
         * Verifies a RemoveSpaceMapLandMarkCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RemoveSpaceMapLandMarkCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoveSpaceMapLandMarkCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.RemoveSpaceMapLandMarkCmd;

        /**
         * Creates a plain object from a RemoveSpaceMapLandMarkCmd message. Also converts values to other types if specified.
         * @param message RemoveSpaceMapLandMarkCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RemoveSpaceMapLandMarkCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemoveSpaceMapLandMarkCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddSpaceMapPortalCmd. */
    interface IAddSpaceMapPortalCmd {

        /** AddSpaceMapPortalCmd eventId */
        eventId?: (string|null);

        /** AddSpaceMapPortalCmd spaceId */
        spaceId?: (string|null);

        /** AddSpaceMapPortalCmd portalArr */
        portalArr?: (pb.IPortal[]|null);
    }

    /** Represents an AddSpaceMapPortalCmd. */
    class AddSpaceMapPortalCmd implements IAddSpaceMapPortalCmd {

        /**
         * Constructs a new AddSpaceMapPortalCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAddSpaceMapPortalCmd);

        /** AddSpaceMapPortalCmd eventId. */
        public eventId: string;

        /** AddSpaceMapPortalCmd spaceId. */
        public spaceId: string;

        /** AddSpaceMapPortalCmd portalArr. */
        public portalArr: pb.IPortal[];

        /**
         * Creates a new AddSpaceMapPortalCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddSpaceMapPortalCmd instance
         */
        public static create(properties?: pb.IAddSpaceMapPortalCmd): pb.AddSpaceMapPortalCmd;

        /**
         * Encodes the specified AddSpaceMapPortalCmd message. Does not implicitly {@link pb.AddSpaceMapPortalCmd.verify|verify} messages.
         * @param message AddSpaceMapPortalCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAddSpaceMapPortalCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddSpaceMapPortalCmd message, length delimited. Does not implicitly {@link pb.AddSpaceMapPortalCmd.verify|verify} messages.
         * @param message AddSpaceMapPortalCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IAddSpaceMapPortalCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddSpaceMapPortalCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddSpaceMapPortalCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AddSpaceMapPortalCmd;

        /**
         * Decodes an AddSpaceMapPortalCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddSpaceMapPortalCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.AddSpaceMapPortalCmd;

        /**
         * Verifies an AddSpaceMapPortalCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddSpaceMapPortalCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddSpaceMapPortalCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.AddSpaceMapPortalCmd;

        /**
         * Creates a plain object from an AddSpaceMapPortalCmd message. Also converts values to other types if specified.
         * @param message AddSpaceMapPortalCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.AddSpaceMapPortalCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddSpaceMapPortalCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RemoveSpaceMapPortalCmd. */
    interface IRemoveSpaceMapPortalCmd {

        /** RemoveSpaceMapPortalCmd eventId */
        eventId?: (string|null);

        /** RemoveSpaceMapPortalCmd spaceId */
        spaceId?: (string|null);

        /** RemoveSpaceMapPortalCmd portalPointArr */
        portalPointArr?: (pb.IMapPoint[]|null);
    }

    /** Represents a RemoveSpaceMapPortalCmd. */
    class RemoveSpaceMapPortalCmd implements IRemoveSpaceMapPortalCmd {

        /**
         * Constructs a new RemoveSpaceMapPortalCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRemoveSpaceMapPortalCmd);

        /** RemoveSpaceMapPortalCmd eventId. */
        public eventId: string;

        /** RemoveSpaceMapPortalCmd spaceId. */
        public spaceId: string;

        /** RemoveSpaceMapPortalCmd portalPointArr. */
        public portalPointArr: pb.IMapPoint[];

        /**
         * Creates a new RemoveSpaceMapPortalCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RemoveSpaceMapPortalCmd instance
         */
        public static create(properties?: pb.IRemoveSpaceMapPortalCmd): pb.RemoveSpaceMapPortalCmd;

        /**
         * Encodes the specified RemoveSpaceMapPortalCmd message. Does not implicitly {@link pb.RemoveSpaceMapPortalCmd.verify|verify} messages.
         * @param message RemoveSpaceMapPortalCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRemoveSpaceMapPortalCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RemoveSpaceMapPortalCmd message, length delimited. Does not implicitly {@link pb.RemoveSpaceMapPortalCmd.verify|verify} messages.
         * @param message RemoveSpaceMapPortalCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRemoveSpaceMapPortalCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RemoveSpaceMapPortalCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RemoveSpaceMapPortalCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RemoveSpaceMapPortalCmd;

        /**
         * Decodes a RemoveSpaceMapPortalCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RemoveSpaceMapPortalCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RemoveSpaceMapPortalCmd;

        /**
         * Verifies a RemoveSpaceMapPortalCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RemoveSpaceMapPortalCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RemoveSpaceMapPortalCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.RemoveSpaceMapPortalCmd;

        /**
         * Creates a plain object from a RemoveSpaceMapPortalCmd message. Also converts values to other types if specified.
         * @param message RemoveSpaceMapPortalCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RemoveSpaceMapPortalCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RemoveSpaceMapPortalCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddSpaceMapGridMaterialCmd. */
    interface IAddSpaceMapGridMaterialCmd {

        /** AddSpaceMapGridMaterialCmd eventId */
        eventId?: (string|null);

        /** AddSpaceMapGridMaterialCmd spaceId */
        spaceId?: (string|null);

        /** AddSpaceMapGridMaterialCmd gridMaterialArr */
        gridMaterialArr?: (pb.IGridMaterial[]|null);
    }

    /** Represents an AddSpaceMapGridMaterialCmd. */
    class AddSpaceMapGridMaterialCmd implements IAddSpaceMapGridMaterialCmd {

        /**
         * Constructs a new AddSpaceMapGridMaterialCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IAddSpaceMapGridMaterialCmd);

        /** AddSpaceMapGridMaterialCmd eventId. */
        public eventId: string;

        /** AddSpaceMapGridMaterialCmd spaceId. */
        public spaceId: string;

        /** AddSpaceMapGridMaterialCmd gridMaterialArr. */
        public gridMaterialArr: pb.IGridMaterial[];

        /**
         * Creates a new AddSpaceMapGridMaterialCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddSpaceMapGridMaterialCmd instance
         */
        public static create(properties?: pb.IAddSpaceMapGridMaterialCmd): pb.AddSpaceMapGridMaterialCmd;

        /**
         * Encodes the specified AddSpaceMapGridMaterialCmd message. Does not implicitly {@link pb.AddSpaceMapGridMaterialCmd.verify|verify} messages.
         * @param message AddSpaceMapGridMaterialCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IAddSpaceMapGridMaterialCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddSpaceMapGridMaterialCmd message, length delimited. Does not implicitly {@link pb.AddSpaceMapGridMaterialCmd.verify|verify} messages.
         * @param message AddSpaceMapGridMaterialCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IAddSpaceMapGridMaterialCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddSpaceMapGridMaterialCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddSpaceMapGridMaterialCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.AddSpaceMapGridMaterialCmd;

        /**
         * Decodes an AddSpaceMapGridMaterialCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddSpaceMapGridMaterialCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.AddSpaceMapGridMaterialCmd;

        /**
         * Verifies an AddSpaceMapGridMaterialCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddSpaceMapGridMaterialCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddSpaceMapGridMaterialCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.AddSpaceMapGridMaterialCmd;

        /**
         * Creates a plain object from an AddSpaceMapGridMaterialCmd message. Also converts values to other types if specified.
         * @param message AddSpaceMapGridMaterialCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.AddSpaceMapGridMaterialCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddSpaceMapGridMaterialCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClearSpaceMapGridMaterialCmd. */
    interface IClearSpaceMapGridMaterialCmd {

        /** ClearSpaceMapGridMaterialCmd eventId */
        eventId?: (string|null);

        /** ClearSpaceMapGridMaterialCmd spaceId */
        spaceId?: (string|null);

        /** ClearSpaceMapGridMaterialCmd gridArr */
        gridArr?: (number[]|null);
    }

    /** Represents a ClearSpaceMapGridMaterialCmd. */
    class ClearSpaceMapGridMaterialCmd implements IClearSpaceMapGridMaterialCmd {

        /**
         * Constructs a new ClearSpaceMapGridMaterialCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IClearSpaceMapGridMaterialCmd);

        /** ClearSpaceMapGridMaterialCmd eventId. */
        public eventId: string;

        /** ClearSpaceMapGridMaterialCmd spaceId. */
        public spaceId: string;

        /** ClearSpaceMapGridMaterialCmd gridArr. */
        public gridArr: number[];

        /**
         * Creates a new ClearSpaceMapGridMaterialCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClearSpaceMapGridMaterialCmd instance
         */
        public static create(properties?: pb.IClearSpaceMapGridMaterialCmd): pb.ClearSpaceMapGridMaterialCmd;

        /**
         * Encodes the specified ClearSpaceMapGridMaterialCmd message. Does not implicitly {@link pb.ClearSpaceMapGridMaterialCmd.verify|verify} messages.
         * @param message ClearSpaceMapGridMaterialCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IClearSpaceMapGridMaterialCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClearSpaceMapGridMaterialCmd message, length delimited. Does not implicitly {@link pb.ClearSpaceMapGridMaterialCmd.verify|verify} messages.
         * @param message ClearSpaceMapGridMaterialCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IClearSpaceMapGridMaterialCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClearSpaceMapGridMaterialCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClearSpaceMapGridMaterialCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ClearSpaceMapGridMaterialCmd;

        /**
         * Decodes a ClearSpaceMapGridMaterialCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClearSpaceMapGridMaterialCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ClearSpaceMapGridMaterialCmd;

        /**
         * Verifies a ClearSpaceMapGridMaterialCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClearSpaceMapGridMaterialCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClearSpaceMapGridMaterialCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.ClearSpaceMapGridMaterialCmd;

        /**
         * Creates a plain object from a ClearSpaceMapGridMaterialCmd message. Also converts values to other types if specified.
         * @param message ClearSpaceMapGridMaterialCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ClearSpaceMapGridMaterialCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClearSpaceMapGridMaterialCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InitGameCmd. */
    interface IInitGameCmd {

        /** InitGameCmd eventId */
        eventId?: (string|null);

        /** InitGameCmd spaceId */
        spaceId?: (string|null);

        /** InitGameCmd name */
        name?: (string|null);

        /** InitGameCmd url */
        url?: (string|null);

        /** InitGameCmd icon */
        icon?: (string|null);

        /** InitGameCmd describe */
        describe?: (string|null);
    }

    /** Represents an InitGameCmd. */
    class InitGameCmd implements IInitGameCmd {

        /**
         * Constructs a new InitGameCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IInitGameCmd);

        /** InitGameCmd eventId. */
        public eventId: string;

        /** InitGameCmd spaceId. */
        public spaceId: string;

        /** InitGameCmd name. */
        public name: string;

        /** InitGameCmd url. */
        public url: string;

        /** InitGameCmd icon. */
        public icon: string;

        /** InitGameCmd describe. */
        public describe: string;

        /**
         * Creates a new InitGameCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InitGameCmd instance
         */
        public static create(properties?: pb.IInitGameCmd): pb.InitGameCmd;

        /**
         * Encodes the specified InitGameCmd message. Does not implicitly {@link pb.InitGameCmd.verify|verify} messages.
         * @param message InitGameCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IInitGameCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InitGameCmd message, length delimited. Does not implicitly {@link pb.InitGameCmd.verify|verify} messages.
         * @param message InitGameCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IInitGameCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InitGameCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InitGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.InitGameCmd;

        /**
         * Decodes an InitGameCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InitGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.InitGameCmd;

        /**
         * Verifies an InitGameCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InitGameCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitGameCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.InitGameCmd;

        /**
         * Creates a plain object from an InitGameCmd message. Also converts values to other types if specified.
         * @param message InitGameCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.InitGameCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitGameCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PreStartGameCmd. */
    interface IPreStartGameCmd {

        /** PreStartGameCmd eventId */
        eventId?: (string|null);

        /** PreStartGameCmd spaceId */
        spaceId?: (string|null);

        /** PreStartGameCmd code */
        code?: (number|null);

        /** PreStartGameCmd message */
        message?: (string|null);
    }

    /** Represents a PreStartGameCmd. */
    class PreStartGameCmd implements IPreStartGameCmd {

        /**
         * Constructs a new PreStartGameCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPreStartGameCmd);

        /** PreStartGameCmd eventId. */
        public eventId: string;

        /** PreStartGameCmd spaceId. */
        public spaceId: string;

        /** PreStartGameCmd code. */
        public code: number;

        /** PreStartGameCmd message. */
        public message: string;

        /**
         * Creates a new PreStartGameCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreStartGameCmd instance
         */
        public static create(properties?: pb.IPreStartGameCmd): pb.PreStartGameCmd;

        /**
         * Encodes the specified PreStartGameCmd message. Does not implicitly {@link pb.PreStartGameCmd.verify|verify} messages.
         * @param message PreStartGameCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPreStartGameCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreStartGameCmd message, length delimited. Does not implicitly {@link pb.PreStartGameCmd.verify|verify} messages.
         * @param message PreStartGameCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPreStartGameCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreStartGameCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreStartGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.PreStartGameCmd;

        /**
         * Decodes a PreStartGameCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreStartGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.PreStartGameCmd;

        /**
         * Verifies a PreStartGameCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreStartGameCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreStartGameCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.PreStartGameCmd;

        /**
         * Creates a plain object from a PreStartGameCmd message. Also converts values to other types if specified.
         * @param message PreStartGameCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.PreStartGameCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreStartGameCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameCountdownCmd. */
    interface IGameCountdownCmd {

        /** GameCountdownCmd eventId */
        eventId?: (string|null);

        /** GameCountdownCmd spaceId */
        spaceId?: (string|null);

        /** GameCountdownCmd countdown */
        countdown?: (number|null);
    }

    /** Represents a GameCountdownCmd. */
    class GameCountdownCmd implements IGameCountdownCmd {

        /**
         * Constructs a new GameCountdownCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGameCountdownCmd);

        /** GameCountdownCmd eventId. */
        public eventId: string;

        /** GameCountdownCmd spaceId. */
        public spaceId: string;

        /** GameCountdownCmd countdown. */
        public countdown: number;

        /**
         * Creates a new GameCountdownCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCountdownCmd instance
         */
        public static create(properties?: pb.IGameCountdownCmd): pb.GameCountdownCmd;

        /**
         * Encodes the specified GameCountdownCmd message. Does not implicitly {@link pb.GameCountdownCmd.verify|verify} messages.
         * @param message GameCountdownCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGameCountdownCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCountdownCmd message, length delimited. Does not implicitly {@link pb.GameCountdownCmd.verify|verify} messages.
         * @param message GameCountdownCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGameCountdownCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCountdownCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCountdownCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GameCountdownCmd;

        /**
         * Decodes a GameCountdownCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCountdownCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GameCountdownCmd;

        /**
         * Verifies a GameCountdownCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCountdownCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCountdownCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.GameCountdownCmd;

        /**
         * Creates a plain object from a GameCountdownCmd message. Also converts values to other types if specified.
         * @param message GameCountdownCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GameCountdownCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCountdownCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TriggerInteractiveEffectCmd. */
    interface ITriggerInteractiveEffectCmd {

        /** TriggerInteractiveEffectCmd eventId */
        eventId?: (string|null);

        /** TriggerInteractiveEffectCmd spaceId */
        spaceId?: (string|null);

        /** TriggerInteractiveEffectCmd pid */
        pid?: (string|null);

        /** TriggerInteractiveEffectCmd id */
        id?: (string|null);

        /** TriggerInteractiveEffectCmd effect */
        effect?: (number|null);
    }

    /** Represents a TriggerInteractiveEffectCmd. */
    class TriggerInteractiveEffectCmd implements ITriggerInteractiveEffectCmd {

        /**
         * Constructs a new TriggerInteractiveEffectCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ITriggerInteractiveEffectCmd);

        /** TriggerInteractiveEffectCmd eventId. */
        public eventId: string;

        /** TriggerInteractiveEffectCmd spaceId. */
        public spaceId: string;

        /** TriggerInteractiveEffectCmd pid. */
        public pid: string;

        /** TriggerInteractiveEffectCmd id. */
        public id: string;

        /** TriggerInteractiveEffectCmd effect. */
        public effect: number;

        /**
         * Creates a new TriggerInteractiveEffectCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TriggerInteractiveEffectCmd instance
         */
        public static create(properties?: pb.ITriggerInteractiveEffectCmd): pb.TriggerInteractiveEffectCmd;

        /**
         * Encodes the specified TriggerInteractiveEffectCmd message. Does not implicitly {@link pb.TriggerInteractiveEffectCmd.verify|verify} messages.
         * @param message TriggerInteractiveEffectCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ITriggerInteractiveEffectCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TriggerInteractiveEffectCmd message, length delimited. Does not implicitly {@link pb.TriggerInteractiveEffectCmd.verify|verify} messages.
         * @param message TriggerInteractiveEffectCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ITriggerInteractiveEffectCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TriggerInteractiveEffectCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TriggerInteractiveEffectCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.TriggerInteractiveEffectCmd;

        /**
         * Decodes a TriggerInteractiveEffectCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TriggerInteractiveEffectCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.TriggerInteractiveEffectCmd;

        /**
         * Verifies a TriggerInteractiveEffectCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TriggerInteractiveEffectCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TriggerInteractiveEffectCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.TriggerInteractiveEffectCmd;

        /**
         * Creates a plain object from a TriggerInteractiveEffectCmd message. Also converts values to other types if specified.
         * @param message TriggerInteractiveEffectCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.TriggerInteractiveEffectCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TriggerInteractiveEffectCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateGameRankListCmd. */
    interface IUpdateGameRankListCmd {

        /** UpdateGameRankListCmd eventId */
        eventId?: (string|null);

        /** UpdateGameRankListCmd spaceId */
        spaceId?: (string|null);

        /** UpdateGameRankListCmd type */
        type?: (string|null);

        /** UpdateGameRankListCmd rankInfo */
        rankInfo?: (pb.IRankInfo[]|null);
    }

    /** Represents an UpdateGameRankListCmd. */
    class UpdateGameRankListCmd implements IUpdateGameRankListCmd {

        /**
         * Constructs a new UpdateGameRankListCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IUpdateGameRankListCmd);

        /** UpdateGameRankListCmd eventId. */
        public eventId: string;

        /** UpdateGameRankListCmd spaceId. */
        public spaceId: string;

        /** UpdateGameRankListCmd type. */
        public type: string;

        /** UpdateGameRankListCmd rankInfo. */
        public rankInfo: pb.IRankInfo[];

        /**
         * Creates a new UpdateGameRankListCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateGameRankListCmd instance
         */
        public static create(properties?: pb.IUpdateGameRankListCmd): pb.UpdateGameRankListCmd;

        /**
         * Encodes the specified UpdateGameRankListCmd message. Does not implicitly {@link pb.UpdateGameRankListCmd.verify|verify} messages.
         * @param message UpdateGameRankListCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IUpdateGameRankListCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateGameRankListCmd message, length delimited. Does not implicitly {@link pb.UpdateGameRankListCmd.verify|verify} messages.
         * @param message UpdateGameRankListCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IUpdateGameRankListCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateGameRankListCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateGameRankListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.UpdateGameRankListCmd;

        /**
         * Decodes an UpdateGameRankListCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateGameRankListCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.UpdateGameRankListCmd;

        /**
         * Verifies an UpdateGameRankListCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateGameRankListCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateGameRankListCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.UpdateGameRankListCmd;

        /**
         * Creates a plain object from an UpdateGameRankListCmd message. Also converts values to other types if specified.
         * @param message UpdateGameRankListCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.UpdateGameRankListCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateGameRankListCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RankInfo. */
    interface IRankInfo {

        /** RankInfo pid */
        pid?: (string|null);

        /** RankInfo time */
        time?: (number|Long|null);
    }

    /** Represents a RankInfo. */
    class RankInfo implements IRankInfo {

        /**
         * Constructs a new RankInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRankInfo);

        /** RankInfo pid. */
        public pid: string;

        /** RankInfo time. */
        public time: (number|Long);

        /**
         * Creates a new RankInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankInfo instance
         */
        public static create(properties?: pb.IRankInfo): pb.RankInfo;

        /**
         * Encodes the specified RankInfo message. Does not implicitly {@link pb.RankInfo.verify|verify} messages.
         * @param message RankInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRankInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RankInfo message, length delimited. Does not implicitly {@link pb.RankInfo.verify|verify} messages.
         * @param message RankInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRankInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RankInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RankInfo;

        /**
         * Decodes a RankInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RankInfo;

        /**
         * Verifies a RankInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RankInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RankInfo
         */
        public static fromObject(object: { [k: string]: any }): pb.RankInfo;

        /**
         * Creates a plain object from a RankInfo message. Also converts values to other types if specified.
         * @param message RankInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RankInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RankInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FinishGameCmd. */
    interface IFinishGameCmd {

        /** FinishGameCmd eventId */
        eventId?: (string|null);

        /** FinishGameCmd spaceId */
        spaceId?: (string|null);

        /** FinishGameCmd pid */
        pid?: (string|null);
    }

    /** Represents a FinishGameCmd. */
    class FinishGameCmd implements IFinishGameCmd {

        /**
         * Constructs a new FinishGameCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IFinishGameCmd);

        /** FinishGameCmd eventId. */
        public eventId: string;

        /** FinishGameCmd spaceId. */
        public spaceId: string;

        /** FinishGameCmd pid. */
        public pid: string;

        /**
         * Creates a new FinishGameCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FinishGameCmd instance
         */
        public static create(properties?: pb.IFinishGameCmd): pb.FinishGameCmd;

        /**
         * Encodes the specified FinishGameCmd message. Does not implicitly {@link pb.FinishGameCmd.verify|verify} messages.
         * @param message FinishGameCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IFinishGameCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FinishGameCmd message, length delimited. Does not implicitly {@link pb.FinishGameCmd.verify|verify} messages.
         * @param message FinishGameCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IFinishGameCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FinishGameCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FinishGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.FinishGameCmd;

        /**
         * Decodes a FinishGameCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FinishGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.FinishGameCmd;

        /**
         * Verifies a FinishGameCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FinishGameCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FinishGameCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.FinishGameCmd;

        /**
         * Creates a plain object from a FinishGameCmd message. Also converts values to other types if specified.
         * @param message FinishGameCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.FinishGameCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FinishGameCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StopGameCmd. */
    interface IStopGameCmd {

        /** StopGameCmd eventId */
        eventId?: (string|null);

        /** StopGameCmd spaceId */
        spaceId?: (string|null);
    }

    /** Represents a StopGameCmd. */
    class StopGameCmd implements IStopGameCmd {

        /**
         * Constructs a new StopGameCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IStopGameCmd);

        /** StopGameCmd eventId. */
        public eventId: string;

        /** StopGameCmd spaceId. */
        public spaceId: string;

        /**
         * Creates a new StopGameCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StopGameCmd instance
         */
        public static create(properties?: pb.IStopGameCmd): pb.StopGameCmd;

        /**
         * Encodes the specified StopGameCmd message. Does not implicitly {@link pb.StopGameCmd.verify|verify} messages.
         * @param message StopGameCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IStopGameCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopGameCmd message, length delimited. Does not implicitly {@link pb.StopGameCmd.verify|verify} messages.
         * @param message StopGameCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IStopGameCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopGameCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StopGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.StopGameCmd;

        /**
         * Decodes a StopGameCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StopGameCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.StopGameCmd;

        /**
         * Verifies a StopGameCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StopGameCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StopGameCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.StopGameCmd;

        /**
         * Creates a plain object from a StopGameCmd message. Also converts values to other types if specified.
         * @param message StopGameCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.StopGameCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StopGameCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FinishGameNotice. */
    interface IFinishGameNotice {

        /** FinishGameNotice pid */
        pid?: (string|null);

        /** FinishGameNotice time */
        time?: (number|Long|null);
    }

    /** Represents a FinishGameNotice. */
    class FinishGameNotice implements IFinishGameNotice {

        /**
         * Constructs a new FinishGameNotice.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IFinishGameNotice);

        /** FinishGameNotice pid. */
        public pid: string;

        /** FinishGameNotice time. */
        public time: (number|Long);

        /**
         * Creates a new FinishGameNotice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FinishGameNotice instance
         */
        public static create(properties?: pb.IFinishGameNotice): pb.FinishGameNotice;

        /**
         * Encodes the specified FinishGameNotice message. Does not implicitly {@link pb.FinishGameNotice.verify|verify} messages.
         * @param message FinishGameNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IFinishGameNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FinishGameNotice message, length delimited. Does not implicitly {@link pb.FinishGameNotice.verify|verify} messages.
         * @param message FinishGameNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IFinishGameNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FinishGameNotice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FinishGameNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.FinishGameNotice;

        /**
         * Decodes a FinishGameNotice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FinishGameNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.FinishGameNotice;

        /**
         * Verifies a FinishGameNotice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FinishGameNotice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FinishGameNotice
         */
        public static fromObject(object: { [k: string]: any }): pb.FinishGameNotice;

        /**
         * Creates a plain object from a FinishGameNotice message. Also converts values to other types if specified.
         * @param message FinishGameNotice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.FinishGameNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FinishGameNotice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameInteractiveEffectCmd. */
    interface IGameInteractiveEffectCmd {

        /** GameInteractiveEffectCmd eventId */
        eventId?: (string|null);

        /** GameInteractiveEffectCmd spaceId */
        spaceId?: (string|null);

        /** GameInteractiveEffectCmd pid */
        pid?: (string|null);

        /** GameInteractiveEffectCmd effect */
        effect?: (string|null);
    }

    /** Represents a GameInteractiveEffectCmd. */
    class GameInteractiveEffectCmd implements IGameInteractiveEffectCmd {

        /**
         * Constructs a new GameInteractiveEffectCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGameInteractiveEffectCmd);

        /** GameInteractiveEffectCmd eventId. */
        public eventId: string;

        /** GameInteractiveEffectCmd spaceId. */
        public spaceId: string;

        /** GameInteractiveEffectCmd pid. */
        public pid: string;

        /** GameInteractiveEffectCmd effect. */
        public effect: string;

        /**
         * Creates a new GameInteractiveEffectCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameInteractiveEffectCmd instance
         */
        public static create(properties?: pb.IGameInteractiveEffectCmd): pb.GameInteractiveEffectCmd;

        /**
         * Encodes the specified GameInteractiveEffectCmd message. Does not implicitly {@link pb.GameInteractiveEffectCmd.verify|verify} messages.
         * @param message GameInteractiveEffectCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGameInteractiveEffectCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameInteractiveEffectCmd message, length delimited. Does not implicitly {@link pb.GameInteractiveEffectCmd.verify|verify} messages.
         * @param message GameInteractiveEffectCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGameInteractiveEffectCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameInteractiveEffectCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameInteractiveEffectCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GameInteractiveEffectCmd;

        /**
         * Decodes a GameInteractiveEffectCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameInteractiveEffectCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GameInteractiveEffectCmd;

        /**
         * Verifies a GameInteractiveEffectCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameInteractiveEffectCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameInteractiveEffectCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.GameInteractiveEffectCmd;

        /**
         * Creates a plain object from a GameInteractiveEffectCmd message. Also converts values to other types if specified.
         * @param message GameInteractiveEffectCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GameInteractiveEffectCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameInteractiveEffectCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameTriggerSpecialAreaNotice. */
    interface IGameTriggerSpecialAreaNotice {

        /** GameTriggerSpecialAreaNotice pid */
        pid?: (string|null);

        /** GameTriggerSpecialAreaNotice name */
        name?: (string|null);
    }

    /** Represents a GameTriggerSpecialAreaNotice. */
    class GameTriggerSpecialAreaNotice implements IGameTriggerSpecialAreaNotice {

        /**
         * Constructs a new GameTriggerSpecialAreaNotice.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGameTriggerSpecialAreaNotice);

        /** GameTriggerSpecialAreaNotice pid. */
        public pid: string;

        /** GameTriggerSpecialAreaNotice name. */
        public name: string;

        /**
         * Creates a new GameTriggerSpecialAreaNotice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameTriggerSpecialAreaNotice instance
         */
        public static create(properties?: pb.IGameTriggerSpecialAreaNotice): pb.GameTriggerSpecialAreaNotice;

        /**
         * Encodes the specified GameTriggerSpecialAreaNotice message. Does not implicitly {@link pb.GameTriggerSpecialAreaNotice.verify|verify} messages.
         * @param message GameTriggerSpecialAreaNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGameTriggerSpecialAreaNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameTriggerSpecialAreaNotice message, length delimited. Does not implicitly {@link pb.GameTriggerSpecialAreaNotice.verify|verify} messages.
         * @param message GameTriggerSpecialAreaNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGameTriggerSpecialAreaNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameTriggerSpecialAreaNotice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameTriggerSpecialAreaNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GameTriggerSpecialAreaNotice;

        /**
         * Decodes a GameTriggerSpecialAreaNotice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameTriggerSpecialAreaNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GameTriggerSpecialAreaNotice;

        /**
         * Verifies a GameTriggerSpecialAreaNotice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameTriggerSpecialAreaNotice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameTriggerSpecialAreaNotice
         */
        public static fromObject(object: { [k: string]: any }): pb.GameTriggerSpecialAreaNotice;

        /**
         * Creates a plain object from a GameTriggerSpecialAreaNotice message. Also converts values to other types if specified.
         * @param message GameTriggerSpecialAreaNotice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GameTriggerSpecialAreaNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameTriggerSpecialAreaNotice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameTriggerInteractiveNotice. */
    interface IGameTriggerInteractiveNotice {

        /** GameTriggerInteractiveNotice pid */
        pid?: (string|null);

        /** GameTriggerInteractiveNotice name */
        name?: (string|null);

        /** GameTriggerInteractiveNotice call */
        call?: (string|null);

        /** GameTriggerInteractiveNotice param */
        param?: (string|null);
    }

    /** Represents a GameTriggerInteractiveNotice. */
    class GameTriggerInteractiveNotice implements IGameTriggerInteractiveNotice {

        /**
         * Constructs a new GameTriggerInteractiveNotice.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGameTriggerInteractiveNotice);

        /** GameTriggerInteractiveNotice pid. */
        public pid: string;

        /** GameTriggerInteractiveNotice name. */
        public name: string;

        /** GameTriggerInteractiveNotice call. */
        public call: string;

        /** GameTriggerInteractiveNotice param. */
        public param: string;

        /**
         * Creates a new GameTriggerInteractiveNotice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameTriggerInteractiveNotice instance
         */
        public static create(properties?: pb.IGameTriggerInteractiveNotice): pb.GameTriggerInteractiveNotice;

        /**
         * Encodes the specified GameTriggerInteractiveNotice message. Does not implicitly {@link pb.GameTriggerInteractiveNotice.verify|verify} messages.
         * @param message GameTriggerInteractiveNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGameTriggerInteractiveNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameTriggerInteractiveNotice message, length delimited. Does not implicitly {@link pb.GameTriggerInteractiveNotice.verify|verify} messages.
         * @param message GameTriggerInteractiveNotice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGameTriggerInteractiveNotice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameTriggerInteractiveNotice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameTriggerInteractiveNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GameTriggerInteractiveNotice;

        /**
         * Decodes a GameTriggerInteractiveNotice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameTriggerInteractiveNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GameTriggerInteractiveNotice;

        /**
         * Verifies a GameTriggerInteractiveNotice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameTriggerInteractiveNotice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameTriggerInteractiveNotice
         */
        public static fromObject(object: { [k: string]: any }): pb.GameTriggerInteractiveNotice;

        /**
         * Creates a plain object from a GameTriggerInteractiveNotice message. Also converts values to other types if specified.
         * @param message GameTriggerInteractiveNotice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GameTriggerInteractiveNotice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameTriggerInteractiveNotice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeMoveSpeedCmd. */
    interface IChangeMoveSpeedCmd {

        /** ChangeMoveSpeedCmd eventId */
        eventId?: (string|null);

        /** ChangeMoveSpeedCmd spaceId */
        spaceId?: (string|null);

        /** ChangeMoveSpeedCmd pid */
        pid?: (string|null);

        /** ChangeMoveSpeedCmd speed */
        speed?: (number|null);

        /** ChangeMoveSpeedCmd duration */
        duration?: (number|null);
    }

    /** Represents a ChangeMoveSpeedCmd. */
    class ChangeMoveSpeedCmd implements IChangeMoveSpeedCmd {

        /**
         * Constructs a new ChangeMoveSpeedCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IChangeMoveSpeedCmd);

        /** ChangeMoveSpeedCmd eventId. */
        public eventId: string;

        /** ChangeMoveSpeedCmd spaceId. */
        public spaceId: string;

        /** ChangeMoveSpeedCmd pid. */
        public pid: string;

        /** ChangeMoveSpeedCmd speed. */
        public speed: number;

        /** ChangeMoveSpeedCmd duration. */
        public duration: number;

        /**
         * Creates a new ChangeMoveSpeedCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeMoveSpeedCmd instance
         */
        public static create(properties?: pb.IChangeMoveSpeedCmd): pb.ChangeMoveSpeedCmd;

        /**
         * Encodes the specified ChangeMoveSpeedCmd message. Does not implicitly {@link pb.ChangeMoveSpeedCmd.verify|verify} messages.
         * @param message ChangeMoveSpeedCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IChangeMoveSpeedCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeMoveSpeedCmd message, length delimited. Does not implicitly {@link pb.ChangeMoveSpeedCmd.verify|verify} messages.
         * @param message ChangeMoveSpeedCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IChangeMoveSpeedCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeMoveSpeedCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeMoveSpeedCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ChangeMoveSpeedCmd;

        /**
         * Decodes a ChangeMoveSpeedCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeMoveSpeedCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ChangeMoveSpeedCmd;

        /**
         * Verifies a ChangeMoveSpeedCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeMoveSpeedCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeMoveSpeedCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.ChangeMoveSpeedCmd;

        /**
         * Creates a plain object from a ChangeMoveSpeedCmd message. Also converts values to other types if specified.
         * @param message ChangeMoveSpeedCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ChangeMoveSpeedCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeMoveSpeedCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangeSpaceSettingCmd. */
    interface IChangeSpaceSettingCmd {

        /** ChangeSpaceSettingCmd eventId */
        eventId?: (string|null);

        /** ChangeSpaceSettingCmd spaceId */
        spaceId?: (string|null);

        /** ChangeSpaceSettingCmd canHandUp */
        canHandUp?: (boolean|null);

        /** ChangeSpaceSettingCmd canAutoMove */
        canAutoMove?: (boolean|null);

        /** ChangeSpaceSettingCmd canFollow */
        canFollow?: (boolean|null);
    }

    /** Represents a ChangeSpaceSettingCmd. */
    class ChangeSpaceSettingCmd implements IChangeSpaceSettingCmd {

        /**
         * Constructs a new ChangeSpaceSettingCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IChangeSpaceSettingCmd);

        /** ChangeSpaceSettingCmd eventId. */
        public eventId: string;

        /** ChangeSpaceSettingCmd spaceId. */
        public spaceId: string;

        /** ChangeSpaceSettingCmd canHandUp. */
        public canHandUp: boolean;

        /** ChangeSpaceSettingCmd canAutoMove. */
        public canAutoMove: boolean;

        /** ChangeSpaceSettingCmd canFollow. */
        public canFollow: boolean;

        /**
         * Creates a new ChangeSpaceSettingCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangeSpaceSettingCmd instance
         */
        public static create(properties?: pb.IChangeSpaceSettingCmd): pb.ChangeSpaceSettingCmd;

        /**
         * Encodes the specified ChangeSpaceSettingCmd message. Does not implicitly {@link pb.ChangeSpaceSettingCmd.verify|verify} messages.
         * @param message ChangeSpaceSettingCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IChangeSpaceSettingCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangeSpaceSettingCmd message, length delimited. Does not implicitly {@link pb.ChangeSpaceSettingCmd.verify|verify} messages.
         * @param message ChangeSpaceSettingCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IChangeSpaceSettingCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangeSpaceSettingCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangeSpaceSettingCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ChangeSpaceSettingCmd;

        /**
         * Decodes a ChangeSpaceSettingCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangeSpaceSettingCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ChangeSpaceSettingCmd;

        /**
         * Verifies a ChangeSpaceSettingCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangeSpaceSettingCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangeSpaceSettingCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.ChangeSpaceSettingCmd;

        /**
         * Creates a plain object from a ChangeSpaceSettingCmd message. Also converts values to other types if specified.
         * @param message ChangeSpaceSettingCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ChangeSpaceSettingCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangeSpaceSettingCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetSpecialAreaPlayerInfoCmd. */
    interface IGetSpecialAreaPlayerInfoCmd {

        /** GetSpecialAreaPlayerInfoCmd eventId */
        eventId?: (string|null);

        /** GetSpecialAreaPlayerInfoCmd spaceId */
        spaceId?: (string|null);

        /** GetSpecialAreaPlayerInfoCmd index */
        index?: (number|null);
    }

    /** Represents a GetSpecialAreaPlayerInfoCmd. */
    class GetSpecialAreaPlayerInfoCmd implements IGetSpecialAreaPlayerInfoCmd {

        /**
         * Constructs a new GetSpecialAreaPlayerInfoCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGetSpecialAreaPlayerInfoCmd);

        /** GetSpecialAreaPlayerInfoCmd eventId. */
        public eventId: string;

        /** GetSpecialAreaPlayerInfoCmd spaceId. */
        public spaceId: string;

        /** GetSpecialAreaPlayerInfoCmd index. */
        public index: number;

        /**
         * Creates a new GetSpecialAreaPlayerInfoCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetSpecialAreaPlayerInfoCmd instance
         */
        public static create(properties?: pb.IGetSpecialAreaPlayerInfoCmd): pb.GetSpecialAreaPlayerInfoCmd;

        /**
         * Encodes the specified GetSpecialAreaPlayerInfoCmd message. Does not implicitly {@link pb.GetSpecialAreaPlayerInfoCmd.verify|verify} messages.
         * @param message GetSpecialAreaPlayerInfoCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGetSpecialAreaPlayerInfoCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetSpecialAreaPlayerInfoCmd message, length delimited. Does not implicitly {@link pb.GetSpecialAreaPlayerInfoCmd.verify|verify} messages.
         * @param message GetSpecialAreaPlayerInfoCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGetSpecialAreaPlayerInfoCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetSpecialAreaPlayerInfoCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetSpecialAreaPlayerInfoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GetSpecialAreaPlayerInfoCmd;

        /**
         * Decodes a GetSpecialAreaPlayerInfoCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetSpecialAreaPlayerInfoCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GetSpecialAreaPlayerInfoCmd;

        /**
         * Verifies a GetSpecialAreaPlayerInfoCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetSpecialAreaPlayerInfoCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetSpecialAreaPlayerInfoCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.GetSpecialAreaPlayerInfoCmd;

        /**
         * Creates a plain object from a GetSpecialAreaPlayerInfoCmd message. Also converts values to other types if specified.
         * @param message GetSpecialAreaPlayerInfoCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GetSpecialAreaPlayerInfoCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetSpecialAreaPlayerInfoCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Pids. */
    interface IPids {

        /** Pids Pid */
        Pid?: (string[]|null);
    }

    /** Represents a Pids. */
    class Pids implements IPids {

        /**
         * Constructs a new Pids.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IPids);

        /** Pids Pid. */
        public Pid: string[];

        /**
         * Creates a new Pids instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Pids instance
         */
        public static create(properties?: pb.IPids): pb.Pids;

        /**
         * Encodes the specified Pids message. Does not implicitly {@link pb.Pids.verify|verify} messages.
         * @param message Pids message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IPids, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Pids message, length delimited. Does not implicitly {@link pb.Pids.verify|verify} messages.
         * @param message Pids message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IPids, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Pids message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Pids
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.Pids;

        /**
         * Decodes a Pids message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Pids
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.Pids;

        /**
         * Verifies a Pids message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Pids message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Pids
         */
        public static fromObject(object: { [k: string]: any }): pb.Pids;

        /**
         * Creates a plain object from a Pids message. Also converts values to other types if specified.
         * @param message Pids
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.Pids, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Pids to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameToastCmd. */
    interface IGameToastCmd {

        /** GameToastCmd eventId */
        eventId?: (string|null);

        /** GameToastCmd spaceId */
        spaceId?: (string|null);

        /** GameToastCmd type */
        type?: (string|null);

        /** GameToastCmd content */
        content?: (string|null);

        /** GameToastCmd duration */
        duration?: (number|Long|null);

        /** GameToastCmd pidArr */
        pidArr?: (string[]|null);
    }

    /** Represents a GameToastCmd. */
    class GameToastCmd implements IGameToastCmd {

        /**
         * Constructs a new GameToastCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IGameToastCmd);

        /** GameToastCmd eventId. */
        public eventId: string;

        /** GameToastCmd spaceId. */
        public spaceId: string;

        /** GameToastCmd type. */
        public type: string;

        /** GameToastCmd content. */
        public content: string;

        /** GameToastCmd duration. */
        public duration: (number|Long);

        /** GameToastCmd pidArr. */
        public pidArr: string[];

        /**
         * Creates a new GameToastCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameToastCmd instance
         */
        public static create(properties?: pb.IGameToastCmd): pb.GameToastCmd;

        /**
         * Encodes the specified GameToastCmd message. Does not implicitly {@link pb.GameToastCmd.verify|verify} messages.
         * @param message GameToastCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IGameToastCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameToastCmd message, length delimited. Does not implicitly {@link pb.GameToastCmd.verify|verify} messages.
         * @param message GameToastCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IGameToastCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameToastCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameToastCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.GameToastCmd;

        /**
         * Decodes a GameToastCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameToastCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.GameToastCmd;

        /**
         * Verifies a GameToastCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameToastCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameToastCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.GameToastCmd;

        /**
         * Creates a plain object from a GameToastCmd message. Also converts values to other types if specified.
         * @param message GameToastCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.GameToastCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameToastCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ShowWidgetCmd. */
    interface IShowWidgetCmd {

        /** ShowWidgetCmd eventId */
        eventId?: (string|null);

        /** ShowWidgetCmd spaceId */
        spaceId?: (string|null);

        /** ShowWidgetCmd pidArr */
        pidArr?: (string[]|null);

        /** ShowWidgetCmd type */
        type?: (string|null);

        /** ShowWidgetCmd url */
        url?: (string|null);

        /** ShowWidgetCmd param */
        param?: (string|null);
    }

    /** Represents a ShowWidgetCmd. */
    class ShowWidgetCmd implements IShowWidgetCmd {

        /**
         * Constructs a new ShowWidgetCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IShowWidgetCmd);

        /** ShowWidgetCmd eventId. */
        public eventId: string;

        /** ShowWidgetCmd spaceId. */
        public spaceId: string;

        /** ShowWidgetCmd pidArr. */
        public pidArr: string[];

        /** ShowWidgetCmd type. */
        public type: string;

        /** ShowWidgetCmd url. */
        public url: string;

        /** ShowWidgetCmd param. */
        public param: string;

        /**
         * Creates a new ShowWidgetCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShowWidgetCmd instance
         */
        public static create(properties?: pb.IShowWidgetCmd): pb.ShowWidgetCmd;

        /**
         * Encodes the specified ShowWidgetCmd message. Does not implicitly {@link pb.ShowWidgetCmd.verify|verify} messages.
         * @param message ShowWidgetCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IShowWidgetCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ShowWidgetCmd message, length delimited. Does not implicitly {@link pb.ShowWidgetCmd.verify|verify} messages.
         * @param message ShowWidgetCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IShowWidgetCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShowWidgetCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShowWidgetCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.ShowWidgetCmd;

        /**
         * Decodes a ShowWidgetCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ShowWidgetCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.ShowWidgetCmd;

        /**
         * Verifies a ShowWidgetCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ShowWidgetCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShowWidgetCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.ShowWidgetCmd;

        /**
         * Creates a plain object from a ShowWidgetCmd message. Also converts values to other types if specified.
         * @param message ShowWidgetCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.ShowWidgetCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShowWidgetCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RobotJoinInfo. */
    interface IRobotJoinInfo {

        /** RobotJoinInfo RobotId */
        RobotId?: (string|null);

        /** RobotJoinInfo RobotName */
        RobotName?: (string|null);

        /** RobotJoinInfo Avatar */
        Avatar?: (string|null);

        /** RobotJoinInfo X */
        X?: (number|null);

        /** RobotJoinInfo Y */
        Y?: (number|null);
    }

    /** Represents a RobotJoinInfo. */
    class RobotJoinInfo implements IRobotJoinInfo {

        /**
         * Constructs a new RobotJoinInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRobotJoinInfo);

        /** RobotJoinInfo RobotId. */
        public RobotId: string;

        /** RobotJoinInfo RobotName. */
        public RobotName: string;

        /** RobotJoinInfo Avatar. */
        public Avatar: string;

        /** RobotJoinInfo X. */
        public X: number;

        /** RobotJoinInfo Y. */
        public Y: number;

        /**
         * Creates a new RobotJoinInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RobotJoinInfo instance
         */
        public static create(properties?: pb.IRobotJoinInfo): pb.RobotJoinInfo;

        /**
         * Encodes the specified RobotJoinInfo message. Does not implicitly {@link pb.RobotJoinInfo.verify|verify} messages.
         * @param message RobotJoinInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRobotJoinInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RobotJoinInfo message, length delimited. Does not implicitly {@link pb.RobotJoinInfo.verify|verify} messages.
         * @param message RobotJoinInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRobotJoinInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RobotJoinInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RobotJoinInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RobotJoinInfo;

        /**
         * Decodes a RobotJoinInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RobotJoinInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RobotJoinInfo;

        /**
         * Verifies a RobotJoinInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RobotJoinInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RobotJoinInfo
         */
        public static fromObject(object: { [k: string]: any }): pb.RobotJoinInfo;

        /**
         * Creates a plain object from a RobotJoinInfo message. Also converts values to other types if specified.
         * @param message RobotJoinInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RobotJoinInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RobotJoinInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RobotJoinCmd. */
    interface IRobotJoinCmd {

        /** RobotJoinCmd EventId */
        EventId?: (string|null);

        /** RobotJoinCmd SpaceId */
        SpaceId?: (string|null);

        /** RobotJoinCmd joinInfoArr */
        joinInfoArr?: (pb.IRobotJoinInfo[]|null);
    }

    /** Represents a RobotJoinCmd. */
    class RobotJoinCmd implements IRobotJoinCmd {

        /**
         * Constructs a new RobotJoinCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRobotJoinCmd);

        /** RobotJoinCmd EventId. */
        public EventId: string;

        /** RobotJoinCmd SpaceId. */
        public SpaceId: string;

        /** RobotJoinCmd joinInfoArr. */
        public joinInfoArr: pb.IRobotJoinInfo[];

        /**
         * Creates a new RobotJoinCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RobotJoinCmd instance
         */
        public static create(properties?: pb.IRobotJoinCmd): pb.RobotJoinCmd;

        /**
         * Encodes the specified RobotJoinCmd message. Does not implicitly {@link pb.RobotJoinCmd.verify|verify} messages.
         * @param message RobotJoinCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRobotJoinCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RobotJoinCmd message, length delimited. Does not implicitly {@link pb.RobotJoinCmd.verify|verify} messages.
         * @param message RobotJoinCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRobotJoinCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RobotJoinCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RobotJoinCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RobotJoinCmd;

        /**
         * Decodes a RobotJoinCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RobotJoinCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RobotJoinCmd;

        /**
         * Verifies a RobotJoinCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RobotJoinCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RobotJoinCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.RobotJoinCmd;

        /**
         * Creates a plain object from a RobotJoinCmd message. Also converts values to other types if specified.
         * @param message RobotJoinCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RobotJoinCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RobotJoinCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RobotMoveCmd. */
    interface IRobotMoveCmd {

        /** RobotMoveCmd EventId */
        EventId?: (string|null);

        /** RobotMoveCmd SpaceId */
        SpaceId?: (string|null);

        /** RobotMoveCmd RobotId */
        RobotId?: (string|null);

        /** RobotMoveCmd X */
        X?: (number|null);

        /** RobotMoveCmd Y */
        Y?: (number|null);

        /** RobotMoveCmd ChatMessage */
        ChatMessage?: (string|null);
    }

    /** Represents a RobotMoveCmd. */
    class RobotMoveCmd implements IRobotMoveCmd {

        /**
         * Constructs a new RobotMoveCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRobotMoveCmd);

        /** RobotMoveCmd EventId. */
        public EventId: string;

        /** RobotMoveCmd SpaceId. */
        public SpaceId: string;

        /** RobotMoveCmd RobotId. */
        public RobotId: string;

        /** RobotMoveCmd X. */
        public X: number;

        /** RobotMoveCmd Y. */
        public Y: number;

        /** RobotMoveCmd ChatMessage. */
        public ChatMessage: string;

        /**
         * Creates a new RobotMoveCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RobotMoveCmd instance
         */
        public static create(properties?: pb.IRobotMoveCmd): pb.RobotMoveCmd;

        /**
         * Encodes the specified RobotMoveCmd message. Does not implicitly {@link pb.RobotMoveCmd.verify|verify} messages.
         * @param message RobotMoveCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRobotMoveCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RobotMoveCmd message, length delimited. Does not implicitly {@link pb.RobotMoveCmd.verify|verify} messages.
         * @param message RobotMoveCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRobotMoveCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RobotMoveCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RobotMoveCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RobotMoveCmd;

        /**
         * Decodes a RobotMoveCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RobotMoveCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RobotMoveCmd;

        /**
         * Verifies a RobotMoveCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RobotMoveCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RobotMoveCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.RobotMoveCmd;

        /**
         * Creates a plain object from a RobotMoveCmd message. Also converts values to other types if specified.
         * @param message RobotMoveCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RobotMoveCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RobotMoveCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RobotExitCmd. */
    interface IRobotExitCmd {

        /** RobotExitCmd EventId */
        EventId?: (string|null);

        /** RobotExitCmd SpaceId */
        SpaceId?: (string|null);

        /** RobotExitCmd RobotIdArr */
        RobotIdArr?: (string[]|null);
    }

    /** Represents a RobotExitCmd. */
    class RobotExitCmd implements IRobotExitCmd {

        /**
         * Constructs a new RobotExitCmd.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.IRobotExitCmd);

        /** RobotExitCmd EventId. */
        public EventId: string;

        /** RobotExitCmd SpaceId. */
        public SpaceId: string;

        /** RobotExitCmd RobotIdArr. */
        public RobotIdArr: string[];

        /**
         * Creates a new RobotExitCmd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RobotExitCmd instance
         */
        public static create(properties?: pb.IRobotExitCmd): pb.RobotExitCmd;

        /**
         * Encodes the specified RobotExitCmd message. Does not implicitly {@link pb.RobotExitCmd.verify|verify} messages.
         * @param message RobotExitCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.IRobotExitCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RobotExitCmd message, length delimited. Does not implicitly {@link pb.RobotExitCmd.verify|verify} messages.
         * @param message RobotExitCmd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.IRobotExitCmd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RobotExitCmd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RobotExitCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.RobotExitCmd;

        /**
         * Decodes a RobotExitCmd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RobotExitCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.RobotExitCmd;

        /**
         * Verifies a RobotExitCmd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RobotExitCmd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RobotExitCmd
         */
        public static fromObject(object: { [k: string]: any }): pb.RobotExitCmd;

        /**
         * Creates a plain object from a RobotExitCmd message. Also converts values to other types if specified.
         * @param message RobotExitCmd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.RobotExitCmd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RobotExitCmd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SelfAndOthers. */
    interface ISelfAndOthers {

        /** SelfAndOthers self */
        self?: (string|null);

        /** SelfAndOthers others */
        others?: (string[]|null);
    }

    /** Represents a SelfAndOthers. */
    class SelfAndOthers implements ISelfAndOthers {

        /**
         * Constructs a new SelfAndOthers.
         * @param [properties] Properties to set
         */
        constructor(properties?: pb.ISelfAndOthers);

        /** SelfAndOthers self. */
        public self: string;

        /** SelfAndOthers others. */
        public others: string[];

        /**
         * Creates a new SelfAndOthers instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SelfAndOthers instance
         */
        public static create(properties?: pb.ISelfAndOthers): pb.SelfAndOthers;

        /**
         * Encodes the specified SelfAndOthers message. Does not implicitly {@link pb.SelfAndOthers.verify|verify} messages.
         * @param message SelfAndOthers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: pb.ISelfAndOthers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SelfAndOthers message, length delimited. Does not implicitly {@link pb.SelfAndOthers.verify|verify} messages.
         * @param message SelfAndOthers message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: pb.ISelfAndOthers, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SelfAndOthers message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SelfAndOthers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): pb.SelfAndOthers;

        /**
         * Decodes a SelfAndOthers message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SelfAndOthers
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): pb.SelfAndOthers;

        /**
         * Verifies a SelfAndOthers message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SelfAndOthers message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SelfAndOthers
         */
        public static fromObject(object: { [k: string]: any }): pb.SelfAndOthers;

        /**
         * Creates a plain object from a SelfAndOthers message. Also converts values to other types if specified.
         * @param message SelfAndOthers
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: pb.SelfAndOthers, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SelfAndOthers to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
