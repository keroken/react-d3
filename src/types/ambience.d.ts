declare type XOR<T, U> = import('ts-xor').XOR<T, U>;

declare type ValueOf<T> = T[keyof T];

declare type Nullable<T> = { [P in keyof T]: T[P] | null };
