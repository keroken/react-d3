/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-classes-per-file */
/* eslint-disable lines-between-class-members */
// https://github.com/shiguredo/sora-js-sdk

declare class ConnectionBase {
  role: string;
  channelId: string;
  metadata: JSONType | undefined;
  signalingUrl: string;
  options: ConnectionOptions;
  constraints: any;
  debug: boolean;
  clientId: string | null;
  connectionId: string | null;
  remoteConnectionIds: string[];
  stream: MediaStream | null;
  authMetadata: JSONType;
  pc: RTCPeerConnection | null;
  encodings: RTCRtpEncodingParameters[];
  protected ws: WebSocket | null;
  protected callbacks: Callbacks;
  protected e2ee: SoraE2EE | null;
  constructor(
    signalingUrl: string,
    role: string,
    channelId: string,
    metadata: JSONType,
    options: ConnectionOptions,
    debug: boolean,
  );

  on<T extends keyof Callbacks, U extends Callbacks[T]>(kind: T, callback: U): void;
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  disconnect(): Promise<[void, void, void]>;
  protected setupE2EE(): void;
  protected startE2EE(): void;
  protected signaling(offer: RTCSessionDescriptionInit): Promise<SignalingOfferMessage>;
  protected createOffer(): Promise<RTCSessionDescriptionInit>;
  protected connectPeerConnection(message: SignalingOfferMessage): Promise<void>;
  protected setRemoteDescription(message: SignalingOfferMessage | SignalingUpdateMessage): Promise<void>;
  protected createAnswer(message: SignalingOfferMessage | SignalingUpdateMessage): Promise<void>;
  protected sendAnswer(): void;
  protected sendUpdateAnswer(): void;
  protected onIceCandidate(): Promise<void>;
  protected waitChangeConnectionStateConnected(): Promise<void>;
  protected setConnectionTimeout(): Promise<MediaStream>;
  protected trace(title: string, message: unknown): void;
  private signalingOnMessageE2EE;
  private signalingOnMessageTypeOffer;
  private signalingOnMessageTypeUpdate;
  private signalingOnMessageTypePing;
  private signalingOnMessageTypeNotify;
  private setSenderParameters;
  private getStats;
  get e2eeSelfFingerprint(): string | undefined;
  get e2eeRemoteFingerprints(): Record<string, string> | undefined;
}

declare class ConnectionPublisher extends ConnectionBase {
  connect(stream: MediaStream): Promise<MediaStream>;
  private singleStream;
  private multiStream;
}

declare class RecordingInfo {
  audio: { bit_rate: number; codec_type: string };
  channel_id: string;
  client_id: string;
  connection_id: string;
  seconds: number;
  video: { bit_rate: number; codec_type: string };
}
