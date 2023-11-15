type ClientMeta = {
  createdAt: string;
  updatedAt: string;
  hasApiCallQuota: boolean;
};

export type ClientProps = {
  clientId: string;
  pdc: string;
  active: boolean;
  cdc: string;
  requestId: string;
  meta: ClientMeta;
};

export type ClientStateProps = {
  isLoading: boolean;
  hasError: boolean;
  error: object;
  isSuccess: boolean;
};

export type UserProps = {
  data: object;
  hasError: boolean;
  error: object;
  TFA: boolean;
};
