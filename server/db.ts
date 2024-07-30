import { User, Room, Rate, CancellationPolicy } from '../proto/users_pb';
function duplicateArray<T>(data: T[], nbDuplicates: number): T[] {
  if (nbDuplicates <= 0) {
    throw new Error('nbDuplicates must be a positive number');
  }

  const result: T[] = [];

  for (let i = 0; i < nbDuplicates; i++) {
    result.push(...data);
  }

  return result;
}

import dataQ from './corrected_hotels.json';
console.log('duplication');
const data = duplicateArray(dataQ, 3);
console.log(data?.length);
export function hotelToClass(hotelData: any): User {
  const hotel = new User();

  // Set scalar fields
  hotel.setName(hotelData.name);
  hotel.setSupplierId(hotelData.supplierId);
  hotel.setHotelId(hotelData.hotelId);
  hotel.setGiataId(hotelData.giataId);
  hotel.setRating(hotelData.rating);
  hotel.setAddress(hotelData.address);
  hotel.setHotelChainId(hotelData.hotelChainId || '');
  hotel.setCategory(hotelData.category || '');
  hotel.setCity(hotelData.city);
  hotel.setCityId(hotelData.cityId);
  hotel.setZone(hotelData.zone || '');
  hotel.setZoneId(hotelData.zoneId || '');
  hotel.setCountry(hotelData.country);
  hotel.setCountryCode(hotelData.countryCode);
  hotel.setLatitude(hotelData.lat || '');
  hotel.setLongitude(hotelData.long || '');
  hotel.setCurrency(hotelData.currency);
  hotel.setScore(hotelData.score);
  hotel.setMinRate(hotelData.minRate);
  hotel.setMaxRate(hotelData.maxRate);
  hotel.setSearchCode(hotelData.searchCode);

  // Set photos
  hotel.setPhotosList(hotelData.photos || []);

  // Set rooms
  /*const rooms = hotelData.rooms.map((roomData: any) => {
    const room = new Room();
    room.setCode(roomData.code);
    room.setName(roomData.name);

    // Set rates
    const rates = roomData.rates.map((rateData: any) => {
      const rate = new Rate();
      rate.setPaymentType(rateData.paymentType);
      rate.setAllotment(rateData.allotment);
      rate.setRooms(rateData.rooms);
      rate.setBoardName(rateData.boardName);
      rate.setBoardCode(rateData.boardCode);
      rate.setNrf(rateData.nrf);
      rate.setAmount(rateData.amount);

      // Set cancellation policies
      const cancellationPolicies = rateData.cancellationPolicies.map((policyData: any) => {
        const policy = new CancellationPolicy();
        policy.setFrom(policyData.from);
        policy.setAmount(policyData.amount);
        return policy;
      });
      rate.setCancellationPoliciesList(cancellationPolicies);

      rate.setOffersList(rateData.offers || []);
      rate.setPromotionsList(rateData.promotions || []);
      rate.setTaxesList(rateData.taxes || []);
      rate.setAdults(rateData.adults);
      rate.setInfant(rateData.infant);
      rate.setChildren(rateData.children);
      rate.setChildrenAges(rateData.childrenAges);
      rate.setRateKey(rateData.rateKey);

      return rate;
    });
    room.setRatesList(rates);

    return room;
  });
  hotel.setRoomsList(rooms);*/

  return hotel;
}

export const users: User[] = data?.map(hotelToClass);
