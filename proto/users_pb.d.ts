// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class User extends jspb.Message { 
    getSupplierId(): number;
    setSupplierId(value: number): User;

    getHotelId(): string;
    setHotelId(value: string): User;

    getGiataId(): number;
    setGiataId(value: number): User;

    getName(): string;
    setName(value: string): User;

    getRating(): number;
    setRating(value: number): User;

    getAddress(): string;
    setAddress(value: string): User;

    getHotelChainId(): string;
    setHotelChainId(value: string): User;

    getCategory(): string;
    setCategory(value: string): User;

    getCity(): string;
    setCity(value: string): User;

    getCityId(): number;
    setCityId(value: number): User;

    getZone(): string;
    setZone(value: string): User;

    getZoneId(): string;
    setZoneId(value: string): User;

    getCountry(): string;
    setCountry(value: string): User;

    getCountryCode(): string;
    setCountryCode(value: string): User;

    getLatitude(): string;
    setLatitude(value: string): User;

    getLongitude(): string;
    setLongitude(value: string): User;

    getCurrency(): string;
    setCurrency(value: string): User;

    clearPhotosList(): void;
    getPhotosList(): Array<string>;
    setPhotosList(value: Array<string>): User;
    addPhotos(value: string, index?: number): string;

    getScore(): number;
    setScore(value: number): User;

    getMinRate(): number;
    setMinRate(value: number): User;

    getMaxRate(): number;
    setMaxRate(value: number): User;

    clearRoomsList(): void;
    getRoomsList(): Array<Room>;
    setRoomsList(value: Array<Room>): User;
    addRooms(value?: Room, index?: number): Room;

    getSearchCode(): string;
    setSearchCode(value: string): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        supplierId: number,
        hotelId: string,
        giataId: number,
        name: string,
        rating: number,
        address: string,
        hotelChainId: string,
        category: string,
        city: string,
        cityId: number,
        zone: string,
        zoneId: string,
        country: string,
        countryCode: string,
        latitude: string,
        longitude: string,
        currency: string,
        photosList: Array<string>,
        score: number,
        minRate: number,
        maxRate: number,
        roomsList: Array<Room.AsObject>,
        searchCode: string,
    }
}

export class Room extends jspb.Message { 
    getCode(): string;
    setCode(value: string): Room;

    getName(): string;
    setName(value: string): Room;

    clearRatesList(): void;
    getRatesList(): Array<Rate>;
    setRatesList(value: Array<Rate>): Room;
    addRates(value?: Rate, index?: number): Rate;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Room.AsObject;
    static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Room;
    static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
    export type AsObject = {
        code: string,
        name: string,
        ratesList: Array<Rate.AsObject>,
    }
}

export class Rate extends jspb.Message { 
    getPaymentType(): string;
    setPaymentType(value: string): Rate;

    getAllotment(): number;
    setAllotment(value: number): Rate;

    getRooms(): number;
    setRooms(value: number): Rate;

    getBoardName(): string;
    setBoardName(value: string): Rate;

    getBoardCode(): string;
    setBoardCode(value: string): Rate;

    getNrf(): boolean;
    setNrf(value: boolean): Rate;

    getAmount(): number;
    setAmount(value: number): Rate;

    clearCancellationPoliciesList(): void;
    getCancellationPoliciesList(): Array<CancellationPolicy>;
    setCancellationPoliciesList(value: Array<CancellationPolicy>): Rate;
    addCancellationPolicies(value?: CancellationPolicy, index?: number): CancellationPolicy;

    clearOffersList(): void;
    getOffersList(): Array<string>;
    setOffersList(value: Array<string>): Rate;
    addOffers(value: string, index?: number): string;

    clearPromotionsList(): void;
    getPromotionsList(): Array<string>;
    setPromotionsList(value: Array<string>): Rate;
    addPromotions(value: string, index?: number): string;

    clearTaxesList(): void;
    getTaxesList(): Array<string>;
    setTaxesList(value: Array<string>): Rate;
    addTaxes(value: string, index?: number): string;

    getAdults(): string;
    setAdults(value: string): Rate;

    getInfant(): string;
    setInfant(value: string): Rate;

    getChildren(): string;
    setChildren(value: string): Rate;

    getChildrenAges(): string;
    setChildrenAges(value: string): Rate;

    getRateKey(): string;
    setRateKey(value: string): Rate;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rate.AsObject;
    static toObject(includeInstance: boolean, msg: Rate): Rate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rate;
    static deserializeBinaryFromReader(message: Rate, reader: jspb.BinaryReader): Rate;
}

export namespace Rate {
    export type AsObject = {
        paymentType: string,
        allotment: number,
        rooms: number,
        boardName: string,
        boardCode: string,
        nrf: boolean,
        amount: number,
        cancellationPoliciesList: Array<CancellationPolicy.AsObject>,
        offersList: Array<string>,
        promotionsList: Array<string>,
        taxesList: Array<string>,
        adults: string,
        infant: string,
        children: string,
        childrenAges: string,
        rateKey: string,
    }
}

export class CancellationPolicy extends jspb.Message { 
    getFrom(): string;
    setFrom(value: string): CancellationPolicy;

    getAmount(): number;
    setAmount(value: number): CancellationPolicy;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CancellationPolicy.AsObject;
    static toObject(includeInstance: boolean, msg: CancellationPolicy): CancellationPolicy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CancellationPolicy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CancellationPolicy;
    static deserializeBinaryFromReader(message: CancellationPolicy, reader: jspb.BinaryReader): CancellationPolicy;
}

export namespace CancellationPolicy {
    export type AsObject = {
        from: string,
        amount: number,
    }
}

export class UsersList extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<User>;
    setUsersList(value: Array<User>): UsersList;
    addUsers(value?: User, index?: number): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsersList.AsObject;
    static toObject(includeInstance: boolean, msg: UsersList): UsersList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsersList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsersList;
    static deserializeBinaryFromReader(message: UsersList, reader: jspb.BinaryReader): UsersList;
}

export namespace UsersList {
    export type AsObject = {
        usersList: Array<User.AsObject>,
    }
}
