type User = {
  id: string;
  name: string;
  subscription: 'free' | 'basic' | 'premium';
};

type Car = {
  userId: string;
  brand: string;
  licensePlate: string;
};

export const USER_LIST_SAMPLE: User[] = [
  {id: '1', name: 'Alex', subscription: 'free'},
  {id: '2', name: 'Gary', subscription: 'basic'},
  {id: '3', name: 'Charlie', subscription: 'premium'},
  {id: '4', name: 'Steven', subscription: 'basic'},
  {id: '5', name: 'Liam', subscription: 'free'},
  {id: '6', name: 'Harry', subscription: 'premium'},
];

export const CAR_LIST_SAMPLE: Car[] = [
  {userId: '3', brand: 'Toyota', licensePlate: 'ABC 1'},
  {userId: '3', brand: 'Honda', licensePlate: 'DBC 2'},
  {userId: '2', brand: 'Toyota', licensePlate: 'ARC 3'},
  {userId: '4', brand: 'Toyota', licensePlate: 'BRC 3'},
  {userId: '4', brand: 'Hyudai', licensePlate: 'YRC 3'},
  {userId: '4', brand: 'Hyudai', licensePlate: 'YGC 7'},
];
