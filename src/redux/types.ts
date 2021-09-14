import { Photo } from "types/photo";

export interface RootState {
  photos: DefaultReducer<Photo[]>;
}

export interface Action<Payload = null> {
  type: string;
  payload?: Payload;
}

export interface DefaultReducer<DataType> {
  loading: boolean;
  success: boolean;
  error: string;
  data: DataType;
  page: number;
  hasNextPage: boolean;
}
