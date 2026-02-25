import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /**
   * Implement the DateTime<Utc> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: { input: any; output: any }
  /** A multipart file upload */
  Upload: { input: any; output: any }
  _FieldSet: { input: any; output: any }
}

export type AccountInput = {
  app?: InputMaybe<Scalars['String']['input']>
  app_secret?: InputMaybe<Scalars['String']['input']>
  appid?: InputMaybe<Scalars['String']['input']>
  callback_url?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  platform_type: Scalars['Int']['input']
}

export type AccountObject = {
  app: Scalars['String']['output']
  app_secret?: Maybe<Scalars['String']['output']>
  appid: Scalars['String']['output']
  callback_url?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  platform_type: Scalars['Int']['output']
}

export type AlarmEventInput = {
  description?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  sort_id: Scalars['Int']['input']
  tag?: InputMaybe<Scalars['String']['input']>
}

export type AlarmEventObject = {
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  sort_id: Scalars['Int']['output']
  tag?: Maybe<Scalars['String']['output']>
}

export type AlarmPlatformInput = {
  description?: InputMaybe<Scalars['String']['input']>
  event_ids?: InputMaybe<Array<Scalars['Int']['input']>>
  name: Scalars['String']['input']
  sort_id: Scalars['Int']['input']
}

export type AlarmPlatformObject = {
  description?: Maybe<Scalars['String']['output']>
  events?: Maybe<Array<AlarmEventObject>>
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  sort_id: Scalars['Int']['output']
}

export type AnnouncementInput = {
  content?: InputMaybe<Scalars['String']['input']>
  expired_at?: InputMaybe<Scalars['Int']['input']>
  is_link: Scalars['Boolean']['input']
  is_visible: Scalars['Boolean']['input']
  link_url?: InputMaybe<Scalars['String']['input']>
  machine_id: Scalars['Int']['input']
  status?: InputMaybe<Scalars['Int']['input']>
  title: Scalars['String']['input']
}

export type AnnouncementObject = {
  content?: Maybe<Scalars['String']['output']>
  created_at: Scalars['String']['output']
  expired_at: Scalars['Int']['output']
  id: Scalars['Int']['output']
  is_link: Scalars['Boolean']['output']
  is_visible: Scalars['Boolean']['output']
  link_url?: Maybe<Scalars['String']['output']>
  machine_id: Scalars['Int']['output']
  status: Scalars['Int']['output']
  title: Scalars['String']['output']
}

export type AppVersionInput = {
  app_type?: InputMaybe<Scalars['Int']['input']>
  download_url?: InputMaybe<Scalars['String']['input']>
  is_force?: InputMaybe<Scalars['Boolean']['input']>
  release_notes?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<Scalars['Boolean']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  version?: InputMaybe<Scalars['String']['input']>
}

export type AppVersionObject = {
  app_type: Scalars['Int']['output']
  download_url: Scalars['String']['output']
  file_md_5: Scalars['String']['output']
  file_size: Scalars['Int']['output']
  id: Scalars['Int']['output']
  is_force: Scalars['Boolean']['output']
  published_at?: Maybe<Scalars['String']['output']>
  publisher?: Maybe<Scalars['String']['output']>
  release_notes?: Maybe<Scalars['String']['output']>
  status: Scalars['Boolean']['output']
  title: Scalars['String']['output']
  version: Scalars['String']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type AppVersionPage = {
  currentPage: Scalars['Int']['output']
  data: Array<AppVersionObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type ArticleInput = {
  author?: InputMaybe<Scalars['String']['input']>
  content?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  is_sticky: Scalars['Boolean']['input']
  is_visible: Scalars['Boolean']['input']
  keywords?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  sort_id: Scalars['Int']['input']
  status: Scalars['Int']['input']
  thumb?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
}

export type ArticleObject = {
  author?: Maybe<Scalars['String']['output']>
  content?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  is_sticky: Scalars['Boolean']['output']
  is_visible: Scalars['Boolean']['output']
  keywords?: Maybe<Scalars['String']['output']>
  slug?: Maybe<Scalars['String']['output']>
  sort_id: Scalars['Int']['output']
  status: Scalars['Int']['output']
  thumb?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
  updated_at: Scalars['String']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type ArticlePage = {
  currentPage: Scalars['Int']['output']
  data: Array<ArticleObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type BannerInput = {
  cover_image?: InputMaybe<Scalars['String']['input']>
  expired_at?: InputMaybe<Scalars['Int']['input']>
  is_visible: Scalars['Boolean']['input']
  link_url?: InputMaybe<Scalars['String']['input']>
  machine_id: Scalars['Int']['input']
  media_type?: InputMaybe<Scalars['Int']['input']>
  sort_id: Scalars['Int']['input']
  title?: InputMaybe<Scalars['String']['input']>
  video_url?: InputMaybe<Scalars['String']['input']>
  view_type: Scalars['Int']['input']
}

export type BannerObject = {
  cover_image?: Maybe<Scalars['String']['output']>
  expired_at?: Maybe<Scalars['Int']['output']>
  hit_count: Scalars['Int']['output']
  id: Scalars['Int']['output']
  is_visible: Scalars['Boolean']['output']
  link_url?: Maybe<Scalars['String']['output']>
  machine_id: Scalars['Int']['output']
  media_type: Scalars['Int']['output']
  sort_id: Scalars['Int']['output']
  title: Scalars['String']['output']
  video_url?: Maybe<Scalars['String']['output']>
  view_type: Scalars['Int']['output']
  views_count: Scalars['Int']['output']
}

export type BatchGoodInput = {
  age_verification_enabled: Scalars['Boolean']['input']
  age_verification_min?: InputMaybe<Scalars['Int']['input']>
  ids: Array<Scalars['Int']['input']>
  is_returnable?: InputMaybe<Scalars['Boolean']['input']>
  is_tax_exempt?: InputMaybe<Scalars['Boolean']['input']>
  merchant_id?: InputMaybe<Scalars['Int']['input']>
  tax_rate?: InputMaybe<Scalars['Float']['input']>
}

export type CategoryInput = {
  is_visible?: InputMaybe<Scalars['Boolean']['input']>
  machine_id: Scalars['Int']['input']
  sort_id?: InputMaybe<Scalars['Int']['input']>
  title: Scalars['String']['input']
}

export type CategoryObject = {
  id: Scalars['Int']['output']
  is_visible: Scalars['Boolean']['output']
  machine_id: Scalars['Int']['output']
  sort_id: Scalars['Int']['output']
  title: Scalars['String']['output']
}

export type ChannelInput = {
  addr: Scalars['Int']['input']
  floor_type?: InputMaybe<Scalars['Int']['input']>
  is_auxiliary?: InputMaybe<Scalars['Boolean']['input']>
  model_id: Scalars['Int']['input']
  motor_id: Scalars['Int']['input']
  name: Scalars['String']['input']
  total: Scalars['Int']['input']
  x: Scalars['Int']['input']
  y: Scalars['Int']['input']
}

export type ChannelObject = {
  addr: Scalars['Int']['output']
  floor_type: Scalars['Int']['output']
  id: Scalars['Int']['output']
  is_auxiliary: Scalars['Boolean']['output']
  is_used?: Maybe<Scalars['Boolean']['output']>
  model_id: Scalars['Int']['output']
  motor_id: Scalars['Int']['output']
  name: Scalars['String']['output']
  sort_id: Scalars['Int']['output']
  total: Scalars['Int']['output']
  x: Scalars['Int']['output']
  y: Scalars['Int']['output']
}

export type CouponCodeInput = {
  count?: InputMaybe<Scalars['Int']['input']>
  coupon_id?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['Int']['input']>
  user_id?: InputMaybe<Scalars['Int']['input']>
}

export type CouponCodeObject = {
  code: Scalars['String']['output']
  coupon?: Maybe<CouponObject>
  coupon_id: Scalars['Int']['output']
  id: Scalars['Int']['output']
  issued_at?: Maybe<Scalars['String']['output']>
  status: Scalars['Int']['output']
  used_at?: Maybe<Scalars['String']['output']>
  used_order_id?: Maybe<Scalars['Int']['output']>
  user_id?: Maybe<Scalars['Int']['output']>
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type CouponCodePage = {
  currentPage: Scalars['Int']['output']
  data: Array<CouponCodeObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type CouponCodesQueryInput = {
  coupon_id: Scalars['Int']['input']
  current_page?: InputMaybe<Scalars['Int']['input']>
  per_page?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['Int']['input']>
}

export type CouponInput = {
  amount?: InputMaybe<Scalars['Float']['input']>
  cover_image?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  discount?: InputMaybe<Scalars['Float']['input']>
  every_amount?: InputMaybe<Scalars['Float']['input']>
  issue_end_time?: InputMaybe<Scalars['Int']['input']>
  issue_start_time?: InputMaybe<Scalars['Int']['input']>
  issue_type?: InputMaybe<Scalars['Int']['input']>
  issued_quantity?: InputMaybe<Scalars['Int']['input']>
  machine_id?: InputMaybe<Scalars['Int']['input']>
  max_discount_amount?: InputMaybe<Scalars['Float']['input']>
  min_amount?: InputMaybe<Scalars['Float']['input']>
  per_user_limit?: InputMaybe<Scalars['Int']['input']>
  reduce_amount?: InputMaybe<Scalars['Float']['input']>
  status?: InputMaybe<Scalars['Int']['input']>
  template_id: Scalars['Int']['input']
  title?: InputMaybe<Scalars['String']['input']>
  total_quantity?: InputMaybe<Scalars['Int']['input']>
  use_end_time?: InputMaybe<Scalars['Int']['input']>
  use_start_time?: InputMaybe<Scalars['Int']['input']>
  valid_days?: InputMaybe<Scalars['Int']['input']>
}

export type CouponObject = {
  amount?: Maybe<Scalars['String']['output']>
  cover_image?: Maybe<Scalars['String']['output']>
  description: Scalars['String']['output']
  discount?: Maybe<Scalars['String']['output']>
  every_amount?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  issue_end_time?: Maybe<Scalars['String']['output']>
  issue_start_time?: Maybe<Scalars['String']['output']>
  issue_type: Scalars['Int']['output']
  issued_quantity: Scalars['Int']['output']
  machine_id?: Maybe<Scalars['Int']['output']>
  max_discount_amount?: Maybe<Scalars['String']['output']>
  merchant_id: Scalars['Int']['output']
  min_amount?: Maybe<Scalars['String']['output']>
  per_user_limit: Scalars['Int']['output']
  reduce_amount?: Maybe<Scalars['String']['output']>
  status: Scalars['Int']['output']
  template_id: Scalars['Int']['output']
  title: Scalars['String']['output']
  total_quantity: Scalars['Int']['output']
  use_end_time?: Maybe<Scalars['String']['output']>
  use_start_time?: Maybe<Scalars['String']['output']>
  valid_days: Scalars['Int']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type CouponPage = {
  currentPage: Scalars['Int']['output']
  data: Array<CouponObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type CouponTemplateInput = {
  coupon_type?: InputMaybe<Scalars['Int']['input']>
  cover_image?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  disabled_fields?: InputMaybe<Array<Scalars['String']['input']>>
  discount_type?: InputMaybe<Scalars['Int']['input']>
  is_visible?: InputMaybe<Scalars['Boolean']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type CouponTemplateObject = {
  coupon_type: Scalars['Int']['output']
  cover_image?: Maybe<Scalars['String']['output']>
  description: Scalars['String']['output']
  disabled_fields?: Maybe<Array<Scalars['String']['output']>>
  discount_type: Scalars['Int']['output']
  id: Scalars['Int']['output']
  is_visible: Scalars['Boolean']['output']
  title: Scalars['String']['output']
}

export type CouponsQueryInput = {
  current_page?: InputMaybe<Scalars['Int']['input']>
  machine_id?: InputMaybe<Scalars['Int']['input']>
  per_page?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['Int']['input']>
}

export type CurrencyInput = {
  code?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  sort_id?: InputMaybe<Scalars['Int']['input']>
  symbol?: InputMaybe<Scalars['String']['input']>
}

export type CurrencyObject = {
  code: Scalars['String']['output']
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  sort_id: Scalars['Int']['output']
  symbol: Scalars['String']['output']
}

export type DailySaleObject = {
  date: Scalars['String']['output']
  id: Scalars['Int']['output']
  machine_id: Scalars['Int']['output']
  merchant_id: Scalars['Int']['output']
  paid_amount: Scalars['String']['output']
  paid_count: Scalars['Int']['output']
  total_amount: Scalars['String']['output']
  total_orders: Scalars['Int']['output']
  unpaid_amount: Scalars['String']['output']
  unpaid_count: Scalars['Int']['output']
}

export type DebuggingInput = {
  addr?: InputMaybe<Scalars['Int']['input']>
  code?: InputMaybe<Scalars['Int']['input']>
  floor_type?: InputMaybe<Scalars['Int']['input']>
  is_dc?: InputMaybe<Scalars['Boolean']['input']>
  is_lp?: InputMaybe<Scalars['Boolean']['input']>
  motor_ids?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type DeliveryLogObject = {
  code: Scalars['String']['output']
  created_at?: Maybe<Scalars['String']['output']>
  delivery_index: Scalars['Int']['output']
  delivery_no: Scalars['String']['output']
  fail_reason?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  machine_id: Scalars['Int']['output']
  status: Scalars['String']['output']
  updated_at?: Maybe<Scalars['String']['output']>
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type DeliveryLogPage = {
  currentPage: Scalars['Int']['output']
  data: Array<DeliveryLogObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type DeliverySummaryObject = {
  delivered: Scalars['Int']['output']
  failed: Scalars['Int']['output']
  in_progress: Scalars['Int']['output']
  pending: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type DriverInput = {
  connect_type_values?: InputMaybe<Array<Scalars['Int']['input']>>
  description?: InputMaybe<Scalars['String']['input']>
  floor_type_values?: InputMaybe<Array<Scalars['Int']['input']>>
  is_default?: InputMaybe<Scalars['Boolean']['input']>
  is_visible?: InputMaybe<Scalars['Boolean']['input']>
  max_channel_slots?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  sort_id?: InputMaybe<Scalars['Int']['input']>
  thumb?: InputMaybe<Scalars['String']['input']>
}

export type DriverObject = {
  connect_type_values: Array<Scalars['Int']['output']>
  description: Scalars['String']['output']
  floor_type_values: Array<Scalars['Int']['output']>
  id: Scalars['Int']['output']
  is_default: Scalars['Boolean']['output']
  is_visible: Scalars['Boolean']['output']
  max_channel_slots: Scalars['Int']['output']
  name: Scalars['String']['output']
  sort_id: Scalars['Int']['output']
  thumb: Scalars['String']['output']
}

export type EmployeeUserInput = {
  machine_ids?: InputMaybe<Array<Scalars['Int']['input']>>
  merchant_id: Scalars['Int']['input']
  role_id?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['Int']['input']>
  user_id: Scalars['Int']['input']
}

export type EmployeeUserObject = {
  alarm_config?: Maybe<UserAlarmConfigObject>
  email: Scalars['String']['output']
  id: Scalars['Int']['output']
  machine_ids?: Maybe<Array<Scalars['Int']['output']>>
  permission_ids?: Maybe<Array<Scalars['Int']['output']>>
  profile_url: Scalars['String']['output']
  role_id: Scalars['Int']['output']
  status: Scalars['String']['output']
  username: Scalars['String']['output']
}

export type FileObject = {
  file_extension?: Maybe<Scalars['String']['output']>
  file_name?: Maybe<Scalars['String']['output']>
  file_size?: Maybe<Scalars['Int']['output']>
  file_type?: Maybe<Scalars['String']['output']>
  file_url?: Maybe<Scalars['String']['output']>
  group_id: Scalars['Int']['output']
  id: Scalars['Int']['output']
  is_referenced: Scalars['Boolean']['output']
  user_id: Scalars['Int']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type FilePage = {
  currentPage: Scalars['Int']['output']
  data: Array<FileObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type FilesQueryInput = {
  current_page?: InputMaybe<Scalars['Int']['input']>
  extensions?: InputMaybe<Array<Scalars['String']['input']>>
  per_page?: InputMaybe<Scalars['Int']['input']>
}

export type FloorTypeDriverInput = {
  addr: Scalars['Int']['input']
  columns?: InputMaybe<Scalars['Int']['input']>
  driver_id: Scalars['Int']['input']
  floor_type: Scalars['Int']['input']
  is_dc: Scalars['Boolean']['input']
  is_lp: Scalars['Boolean']['input']
  lock_only: Scalars['Boolean']['input']
  mode?: InputMaybe<Scalars['Int']['input']>
  motor_ids?: InputMaybe<Array<Scalars['Int']['input']>>
  per_channel_capacity: Scalars['Int']['input']
  rows?: InputMaybe<Scalars['Int']['input']>
  total_channel_slots: Scalars['Int']['input']
}

export type FloorTypeDriverObject = {
  addr: Scalars['Int']['output']
  driver_id: Scalars['Int']['output']
  floor_type: Scalars['Int']['output']
  is_dc: Scalars['Boolean']['output']
  is_lp: Scalars['Boolean']['output']
  lock_only: Scalars['Boolean']['output']
  per_channel_capacity: Scalars['Int']['output']
  total_channel_slots: Scalars['Int']['output']
}

export type GoodAttributeInput = {
  id: Scalars['Int']['input']
  immutable: Scalars['Boolean']['input']
  label_name: Scalars['String']['input']
  label_value?: InputMaybe<Array<Scalars['String']['input']>>
}

export type GoodAttributeObject = {
  id: Scalars['Int']['output']
  immutable: Scalars['Boolean']['output']
  label_name: Scalars['String']['output']
  label_value?: Maybe<Array<Scalars['String']['output']>>
}

export type GoodInput = {
  age_verification_enabled?: InputMaybe<Scalars['Boolean']['input']>
  age_verification_min?: InputMaybe<Scalars['Int']['input']>
  attributes?: InputMaybe<Array<GoodAttributeInput>>
  content?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  is_returnable?: InputMaybe<Scalars['Boolean']['input']>
  is_tax_exempt?: InputMaybe<Scalars['Boolean']['input']>
  media?: InputMaybe<Array<Scalars['String']['input']>>
  multi_currency_enabled?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  prices?: InputMaybe<Array<GoodPriceInput>>
  slug?: InputMaybe<Scalars['String']['input']>
  tax_rate?: InputMaybe<Scalars['Float']['input']>
  thumb?: InputMaybe<Scalars['String']['input']>
  unit_id?: InputMaybe<Scalars['Int']['input']>
}

export type GoodObject = {
  age_verification_enabled: Scalars['Boolean']['output']
  age_verification_min?: Maybe<Scalars['Int']['output']>
  attributes: Array<GoodAttributeObject>
  content?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  is_returnable: Scalars['Boolean']['output']
  is_tax_exempt: Scalars['Boolean']['output']
  media?: Maybe<Array<Scalars['String']['output']>>
  multi_currency_enabled: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  original_price?: Maybe<Scalars['String']['output']>
  price: Scalars['String']['output']
  prices: Array<GoodPriceObject>
  slug?: Maybe<Scalars['String']['output']>
  tax_rate?: Maybe<Scalars['String']['output']>
  thumb?: Maybe<Scalars['String']['output']>
  unit?: Maybe<UnitObject>
  updated_at: Scalars['String']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type GoodPage = {
  currentPage: Scalars['Int']['output']
  data: Array<GoodObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type GoodPriceInput = {
  currency_id: Scalars['Int']['input']
  id: Scalars['Int']['input']
  original_price?: InputMaybe<Scalars['Float']['input']>
  price: Scalars['Float']['input']
}

export type GoodPriceObject = {
  currency?: Maybe<CurrencyObject>
  id: Scalars['Int']['output']
  original_price?: Maybe<Scalars['String']['output']>
  price: Scalars['String']['output']
}

export type LevelInput = {
  benefits?: InputMaybe<Array<Scalars['String']['input']>>
  discount_rate?: InputMaybe<Scalars['String']['input']>
  level?: InputMaybe<Scalars['Int']['input']>
  merchant_id?: InputMaybe<Scalars['Int']['input']>
  min_points?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type LevelObject = {
  benefits?: Maybe<Array<Scalars['String']['output']>>
  discount_rate: Scalars['String']['output']
  id: Scalars['Int']['output']
  level: Scalars['Int']['output']
  merchant_id: Scalars['Int']['output']
  min_points: Scalars['Int']['output']
  name: Scalars['String']['output']
}

export type MachineConfigInput = {
  app_cart_enabled?: InputMaybe<Scalars['Boolean']['input']>
  app_coupon_code_enabled?: InputMaybe<Scalars['Boolean']['input']>
  app_navbar_logo?: InputMaybe<Scalars['String']['input']>
  app_upgrade_enabled?: InputMaybe<Scalars['Boolean']['input']>
  auth_credentials_enabled?: InputMaybe<Scalars['Boolean']['input']>
  brightness?: InputMaybe<Scalars['Int']['input']>
  carousel_ads_count?: InputMaybe<Scalars['Int']['input']>
  carousel_ads_enabled?: InputMaybe<Scalars['Boolean']['input']>
  debugging_enabled?: InputMaybe<Scalars['Boolean']['input']>
  free_purchase_enabled?: InputMaybe<Scalars['Boolean']['input']>
  idle_timeout?: InputMaybe<Scalars['Int']['input']>
  language?: InputMaybe<Scalars['String']['input']>
  languages?: InputMaybe<Array<Scalars['String']['input']>>
  payment_wait_timeout?: InputMaybe<Scalars['Int']['input']>
  pickup_code_enabled?: InputMaybe<Scalars['Boolean']['input']>
  price_digits?: InputMaybe<Scalars['Int']['input']>
  price_line?: InputMaybe<Scalars['Boolean']['input']>
  price_thousands?: InputMaybe<Scalars['Boolean']['input']>
  purchase_limit?: InputMaybe<Scalars['Int']['input']>
  standby_ads_autoplay?: InputMaybe<Scalars['Boolean']['input']>
  standby_ads_count?: InputMaybe<Scalars['Int']['input']>
  standby_ads_enabled?: InputMaybe<Scalars['Boolean']['input']>
  volume?: InputMaybe<Scalars['Int']['input']>
}

export type MachineConfigObject = {
  android_version?: Maybe<Scalars['String']['output']>
  app_cart_enabled: Scalars['Boolean']['output']
  app_coupon_code_enabled: Scalars['Boolean']['output']
  app_navbar_logo: Scalars['String']['output']
  app_upgrade_enabled: Scalars['Boolean']['output']
  app_version?: Maybe<Scalars['String']['output']>
  auth_credentials_enabled: Scalars['Boolean']['output']
  brightness?: Maybe<Scalars['Int']['output']>
  carousel_ads_count: Scalars['Int']['output']
  carousel_ads_enabled: Scalars['Boolean']['output']
  debugging_enabled: Scalars['Boolean']['output']
  device_model?: Maybe<Scalars['String']['output']>
  free_purchase_enabled: Scalars['Boolean']['output']
  humidity?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  idle_timeout: Scalars['Int']['output']
  java_version?: Maybe<Scalars['String']['output']>
  language?: Maybe<Scalars['String']['output']>
  languages: Array<Scalars['String']['output']>
  manufacturer?: Maybe<Scalars['String']['output']>
  network_rssi?: Maybe<Scalars['Int']['output']>
  network_sim_iccid?: Maybe<Scalars['String']['output']>
  network_type?: Maybe<Scalars['String']['output']>
  payment_wait_timeout: Scalars['Int']['output']
  pickup_code_enabled: Scalars['Boolean']['output']
  price_digits: Scalars['Int']['output']
  price_line: Scalars['Boolean']['output']
  price_thousands: Scalars['Boolean']['output']
  purchase_limit: Scalars['Int']['output']
  screen_height?: Maybe<Scalars['Int']['output']>
  screen_width?: Maybe<Scalars['Int']['output']>
  sdk_version?: Maybe<Scalars['String']['output']>
  serial_no?: Maybe<Scalars['String']['output']>
  standby_ads_autoplay: Scalars['Boolean']['output']
  standby_ads_count: Scalars['Int']['output']
  standby_ads_enabled: Scalars['Boolean']['output']
  temperature?: Maybe<Scalars['String']['output']>
  uptime_minutes_today?: Maybe<Scalars['Int']['output']>
  volume?: Maybe<Scalars['Int']['output']>
}

export type MachineGroupInput = {
  sort_id?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type MachineGroupObject = {
  id: Scalars['Int']['output']
  sort_id: Scalars['Int']['output']
  title: Scalars['String']['output']
}

export type MachineInput = {
  address?: InputMaybe<Scalars['String']['input']>
  connect_type?: InputMaybe<Scalars['Int']['input']>
  contact?: InputMaybe<Scalars['String']['input']>
  cover_image?: InputMaybe<Scalars['String']['input']>
  currency_id?: InputMaybe<Scalars['Int']['input']>
  group_id?: InputMaybe<Scalars['Int']['input']>
  imei?: InputMaybe<Scalars['String']['input']>
  lng_lat?: InputMaybe<Scalars['String']['input']>
  machine_type?: InputMaybe<Scalars['Int']['input']>
  merchant_id?: InputMaybe<Scalars['Int']['input']>
  model_id?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<Scalars['Int']['input']>
  tel?: InputMaybe<Scalars['String']['input']>
  timezone?: InputMaybe<Scalars['String']['input']>
}

export type MachineLogObject = {
  id: Scalars['Int']['output']
  machine_id: Scalars['Int']['output']
  method: Scalars['String']['output']
  payload?: Maybe<Scalars['String']['output']>
  pushed_at: Scalars['String']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type MachineLogPage = {
  currentPage: Scalars['Int']['output']
  data: Array<MachineLogObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type MachineObject = {
  address?: Maybe<Scalars['String']['output']>
  app_key?: Maybe<Scalars['String']['output']>
  client_id: Scalars['String']['output']
  config?: Maybe<MachineConfigObject>
  connect_type: Scalars['Int']['output']
  contact?: Maybe<Scalars['String']['output']>
  coupon_enabled: Scalars['Boolean']['output']
  cover_image?: Maybe<Scalars['String']['output']>
  currency?: Maybe<CurrencyObject>
  currency_id?: Maybe<Scalars['Int']['output']>
  device_state: Scalars['Int']['output']
  free_purchase_enabled: Scalars['Boolean']['output']
  group_id?: Maybe<Scalars['Int']['output']>
  id: Scalars['Int']['output']
  imei?: Maybe<Scalars['String']['output']>
  is_online: Scalars['Boolean']['output']
  lng_lat?: Maybe<Scalars['String']['output']>
  machine_no: Scalars['String']['output']
  machine_type: Scalars['Int']['output']
  merchant?: Maybe<MerchantObject>
  merchant_id: Scalars['Int']['output']
  model?: Maybe<ModelObject>
  model_id: Scalars['Int']['output']
  name: Scalars['String']['output']
  notify_message?: Maybe<Scalars['String']['output']>
  password?: Maybe<Scalars['String']['output']>
  pickup_code_enabled: Scalars['Boolean']['output']
  purchase_limit: Scalars['Int']['output']
  qrcode?: Maybe<Scalars['String']['output']>
  status: Scalars['String']['output']
  tel?: Maybe<Scalars['String']['output']>
  timezone: Scalars['String']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type MachinePage = {
  currentPage: Scalars['Int']['output']
  data: Array<MachineObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type MachineRecipeInput = {
  machine_id: Scalars['Int']['input']
  recipe_id?: InputMaybe<Scalars['Int']['input']>
  sort_id?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['Boolean']['input']>
}

export type MachineRecipeObject = {
  id: Scalars['Int']['output']
  machine_id: Scalars['Int']['output']
  recipe_id: Scalars['Int']['output']
  sort_id?: Maybe<Scalars['Int']['output']>
  status?: Maybe<Scalars['Boolean']['output']>
}

export type MachineTypeCountObject = {
  machine_count: Scalars['Int']['output']
  machine_type: Scalars['Int']['output']
  offline_count: Scalars['Int']['output']
  online_count: Scalars['Int']['output']
}

export type MachinesQueryInput = {
  current_page?: InputMaybe<Scalars['Int']['input']>
  group_id?: InputMaybe<Scalars['Int']['input']>
  per_page?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['Int']['input']>
}

export type MemberInput = {
  balance?: InputMaybe<Scalars['String']['input']>
  card_no?: InputMaybe<Scalars['String']['input']>
  expired_at?: InputMaybe<Scalars['Int']['input']>
  level_id?: InputMaybe<Scalars['Int']['input']>
  machine_id?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['Boolean']['input']>
  user_id?: InputMaybe<Scalars['Int']['input']>
}

export type MemberObject = {
  balance: Scalars['String']['output']
  card_no: Scalars['String']['output']
  created_at: Scalars['String']['output']
  expired_at?: Maybe<Scalars['Int']['output']>
  id: Scalars['Int']['output']
  level_id: Scalars['Int']['output']
  machine_id?: Maybe<Scalars['Int']['output']>
  merchant_id: Scalars['Int']['output']
  points: Scalars['Int']['output']
  status: Scalars['Boolean']['output']
  total_balance: Scalars['String']['output']
  total_points: Scalars['Int']['output']
  user_id: Scalars['Int']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type MemberPage = {
  currentPage: Scalars['Int']['output']
  data: Array<MemberObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type MembersQueryInput = {
  card_no?: InputMaybe<Scalars['String']['input']>
  current_page?: InputMaybe<Scalars['Int']['input']>
  level_id?: InputMaybe<Scalars['Int']['input']>
  machine_id?: InputMaybe<Scalars['Int']['input']>
  merchant_id?: InputMaybe<Scalars['Int']['input']>
  per_page?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['Boolean']['input']>
}

export type MenuInput = {
  component?: InputMaybe<Scalars['String']['input']>
  display_name: Scalars['String']['input']
  meta?: InputMaybe<MenuMetaInput>
  name: Scalars['String']['input']
  parent_id: Scalars['Int']['input']
  path?: InputMaybe<Scalars['String']['input']>
  redirect?: InputMaybe<Scalars['String']['input']>
  sort_id: Scalars['Int']['input']
}

export type MenuMeta = {
  affix: Scalars['Boolean']['output']
  frame_src?: Maybe<Scalars['String']['output']>
  hidden: Scalars['Boolean']['output']
  icon: Scalars['String']['output']
  keep_alive: Scalars['Boolean']['output']
  permissions: Scalars['String']['output']
  title: Scalars['String']['output']
}

export type MenuMetaInput = {
  affix: Scalars['Boolean']['input']
  frame_src?: InputMaybe<Scalars['String']['input']>
  hidden: Scalars['Boolean']['input']
  icon: Scalars['String']['input']
  keep_alive: Scalars['Boolean']['input']
  permissions: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type MenuObject = {
  children?: Maybe<Array<MenuObject>>
  component?: Maybe<Scalars['String']['output']>
  display_name: Scalars['String']['output']
  id: Scalars['Int']['output']
  meta?: Maybe<MenuMeta>
  name: Scalars['String']['output']
  parent_id: Scalars['Int']['output']
  path?: Maybe<Scalars['String']['output']>
  redirect?: Maybe<Scalars['String']['output']>
  sort_id: Scalars['Int']['output']
}

export type MerchantConfigInput = {
  app_key?: InputMaybe<Scalars['String']['input']>
  debug?: InputMaybe<Scalars['Boolean']['input']>
  is_dev?: InputMaybe<Scalars['Boolean']['input']>
  machine_types?: InputMaybe<Array<Scalars['Int']['input']>>
  max_machine_count?: InputMaybe<Scalars['Int']['input']>
  max_model_count?: InputMaybe<Scalars['Int']['input']>
  max_staff_count?: InputMaybe<Scalars['Int']['input']>
  merchant_id: Scalars['Int']['input']
  reset_app_secret?: InputMaybe<Scalars['Boolean']['input']>
  tax_enabled?: InputMaybe<Scalars['Boolean']['input']>
  timezone?: InputMaybe<Scalars['String']['input']>
  whitelist_ip?: InputMaybe<Scalars['String']['input']>
}

export type MerchantConfigObject = {
  app_key: Scalars['String']['output']
  app_secret: Scalars['String']['output']
  appid: Scalars['String']['output']
  current_machine_count: Scalars['Int']['output']
  current_model_count: Scalars['Int']['output']
  current_staff_count: Scalars['Int']['output']
  debug: Scalars['Boolean']['output']
  is_dev: Scalars['Boolean']['output']
  machine_types: Array<Scalars['Int']['output']>
  max_machine_count: Scalars['Int']['output']
  max_model_count: Scalars['Int']['output']
  max_staff_count: Scalars['Int']['output']
  tax_enabled: Scalars['Boolean']['output']
  timezone: Scalars['String']['output']
  whitelist_ip?: Maybe<Scalars['String']['output']>
}

export type MerchantInput = {
  description: Scalars['String']['input']
  keywords: Scalars['String']['input']
  logo?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<Scalars['Int']['input']>
  title: Scalars['String']['input']
}

export type MerchantObject = {
  config?: Maybe<MerchantConfigObject>
  created_at: Scalars['String']['output']
  description: Scalars['String']['output']
  expired_at?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  keywords: Scalars['String']['output']
  logo?: Maybe<Scalars['String']['output']>
  owner?: Maybe<EmployeeUserObject>
  status: Scalars['String']['output']
  title: Scalars['String']['output']
  verified_at?: Maybe<Scalars['String']['output']>
}

export type MerchantOwnerInput = {
  merchant_id: Scalars['Int']['input']
  unset: Scalars['Boolean']['input']
  user_id: Scalars['Int']['input']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type MerchantPage = {
  currentPage: Scalars['Int']['output']
  data: Array<MerchantObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type MerchantUserObject = {
  debug: Scalars['Boolean']['output']
  expired_at?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  is_dev: Scalars['Boolean']['output']
  logo?: Maybe<Scalars['String']['output']>
  machine_ids?: Maybe<Array<Scalars['Int']['output']>>
  tax_enabled: Scalars['Boolean']['output']
  title: Scalars['String']['output']
  verified_at?: Maybe<Scalars['String']['output']>
}

export type ModelInput = {
  description?: InputMaybe<Scalars['String']['input']>
  drivers?: InputMaybe<Array<FloorTypeDriverInput>>
  merchant_id?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type ModelObject = {
  description: Scalars['String']['output']
  drivers?: Maybe<Array<FloorTypeDriverObject>>
  has_lock_feature: Scalars['Boolean']['output']
  id: Scalars['Int']['output']
  merchant_id: Scalars['Int']['output']
  name: Scalars['String']['output']
  total_channels?: Maybe<Scalars['Int']['output']>
  updated_at: Scalars['String']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type ModelPage = {
  currentPage: Scalars['Int']['output']
  data: Array<ModelObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type Mutation = {
  /**
   * Updates multiple existing goods in the database.
   *
   * This asynchronous function updates multiple goods in the `goods` table using the provided `input`.
   * The user must have the appropriate permissions and be the owner of the goods to perform this operation.
   * If the update is successful, a success message is returned. If the user lacks permissions or the update fails,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the updated good data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the goods do not belong to the user's merchant,
   * or if the update process fails.
   */
  batchUpdateGoods: Scalars['String']['output']
  /**
   * Binds products to a good.
   *
   * This asynchronous function updates the `good_id` of the products in the `products` table
   * with the given `good_id` for the products with the given `ids` in the machine with the
   * given `machine_id`. The function checks whether the current user has the necessary permissions
   * and whether the machine belongs to the user's merchant. If the user lacks permissions, the
   * machine does not belong to the merchant, or the update of the product inventory fails, an
   * error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `machine_id` - The id of the machine in which to bind the products.
   * * `ids` - The ids of the products to bind.
   * * `good_id` - The id of the good to bind the products to.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the query is successful, or an error containing
   * the description of the error if the query fails or the user lacks necessary permissions.
   */
  batchUpdateProducts: Scalars['String']['output']
  /**
   * Cancel an existing order by its unique identifier.
   *
   * This asynchronous function cancels an order from the database based
   * on the provided `id`. It first checks whether the current user has
   * the necessary permissions and whether the order belongs to the user's
   * merchant. If the cancellation is successful, a success message is returned.
   * Otherwise, an error is returned if the user lacks permissions or if the
   * cancellation process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the order to be canceled.
   * * `input` - The reason for cancellation, which is optional. If provided, it will be stored in the database.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * order was canceled successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions,
   * if the order does not belong to the user's merchant, or if the cancellation
   * process fails.
   */
  cancelOrder: Scalars['String']['output']
  /**
   * Clears the power schedule for the given machine `id`.
   *
   * This function checks if the current user has the necessary permissions and whether
   * the machine belongs to the user's merchant before proceeding with the clear.
   * If the machine is online and active, an MQTT message is sent to the machine
   * topic with the power schedule clear method. If the clear is successful, a success
   * message is returned. If the user lacks permissions, the machine does not belong to
   * the merchant, or if the clear fails, an error is returned.
   */
  clearMachinePowerSchedule: Scalars['String']['output']
  /**
   * Clears a machine's malfunctions.
   *
   * This asynchronous function checks if the current user has the necessary permissions
   * and whether the machine belongs to the user's merchant before proceeding with the
   * clear. If the machine is online and active, an MQTT message is sent to the machine
   * topic with the clear malfunctions method. If the clear is successful, a success message is returned.
   * If the user lacks permissions, the machine does not belong to the merchant, or if the clear
   * fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the current user and
   * the application state.
   * * `machine_id` - The unique identifier of the machine to clear malfunctions.
   *
   * # Returns
   *
   * A `Result` containing a success message if the clear is successful, or an error if
   * the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the machine
   * does not belong to the merchant, or if the clear operation fails.
   */
  clearMalfunction: Scalars['String']['output']
  /**
   * Creates a new account with the provided parameters.
   *
   * The `app_secret` field is optional and defaults to `None` if not
   * provided. The `callback_url` field is also optional and defaults to
   * an empty string if not provided. The `platform_type` field is
   * required and must be set to one of the supported values.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters for creating a new account.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * account was created successfully, or an error if the operation fails.
   */
  createAccount: Scalars['String']['output']
  /**
   * Creates a new alarm_event in the database.
   *
   * This asynchronous function requires a role of `ROOT` to execute.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The alarm_event data to create.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the query is successful, or an error containing
   * the description of the error if the query fails.
   */
  createAlarmEvent: Scalars['String']['output']
  /**
   * Creates a new alarm_platform in the database.
   *
   * This asynchronous function requires a role of `ROOT` to execute.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `input` - The alarm_platform data to create.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the query is successful, or an error containing
   * the description of the error if the query fails.
   */
  createAlarmPlatform: Scalars['String']['output']
  /**
   * Creates a new announcement in the database.
   *
   * This asynchronous function creates a new announcement in the `announcements` table using the provided `input`.
   * The user must have the appropriate permissions and be the owner of the machine to perform this operation.
   * If the creation is successful, a success message is returned. If the user lacks permissions or the creation fails,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the new announcement data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the creation is successful, or an error if the operation fails.
   */
  createAnnouncement: Scalars['String']['output']
  /**
   * Creates a new app version in the database.
   *
   * This asynchronous function creates a new app version in the `app_versions` table using the provided `input`.
   * If the user lacks permissions or the create process fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the app version details.
   *
   * # Returns
   *
   * A `Result` containing a success message if the create is successful,
   * or an error containing the description of the error if the create fails or the user lacks permissions.
   */
  createAppVersion: Scalars['String']['output']
  /**
   * article
   *
   * This asynchronous function creates a new article in the database.
   * The user must have the appropriate permissions to perform this operation.
   * If the creation is successful, a success message is returned. If the user lacks
   * permissions or the creation fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the new article data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the creation is successful,
   * or an error if the operation fails.
   */
  createArticle: Scalars['String']['output']
  /**
   * Creates a new banner in the database.
   *
   * This asynchronous function creates a new banner in the `banners` table using the provided `input`.
   * The user must have the appropriate permissions and be associated with a merchant to perform this operation.
   * If the creation is successful, a success message is returned. If the user lacks permissions or the creation fails,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the new banner data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the creation is successful, or an error if the operation fails.
   */
  createBanner: Scalars['String']['output']
  createCategory: Scalars['String']['output']
  /**
   * Creates a new channel in the database.
   *
   * This asynchronous function creates a new channel in the `channels` table using the provided `input`.
   * It checks whether the current user has the necessary permissions and whether the channel belongs to the
   * user's merchant before proceeding with the creation. If the creation is successful, a success message is returned.
   * Otherwise, an error is returned if the user lacks permissions, the channel does not belong to the merchant,
   * or if the creation process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the channel data to be stored.
   *
   * # Returns
   *
   * A `Result` containing a success message if the creation is successful, or an error if the operation fails or the user lacks the necessary permissions.
   */
  createChannel: Scalars['String']['output']
  /**
   * Creates a new coupon in the database.
   *
   * This asynchronous function creates a new coupon in the database with the
   * provided `input` parameters. The user must have the root role or belong to the
   * merchant to perform this operation. If the creation is successful, a success
   * message is returned. If the user lacks permissions or the creation fails, an error
   * is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the new coupon data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the creation is successful, or an error
   * containing the description of the error if the query fails.
   */
  createCoupon: Scalars['String']['output']
  /**
   * Creates a new coupon code in the database.
   *
   * This asynchronous function creates a new coupon code in the database with the
   * provided `input` parameters. The user must have the root role to perform this
   * operation. If the creation is successful, a success message is returned. If the
   * user lacks permissions or the creation fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the new coupon code data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the creation is successful, or an error
   * containing the description of the error if the query fails.
   */
  createCouponCode: Scalars['String']['output']
  /**
   * Creates a new coupon template in the database.
   *
   * This asynchronous function creates a new coupon template in the database with the
   * provided `input` parameters. The user must have the root role to perform this operation.
   * If the creation is successful, a success message is returned. If the user lacks
   * permissions or the creation fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the new coupon template data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the creation is successful, or an error
   * containing the description of the error if the query fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, or if the creation fails.
   */
  createCouponTemplate: Scalars['String']['output']
  /**
   * Creates a new currency in the database.
   *
   * This asynchronous function adds a new currency to the `currencies` table using the provided `input`.
   * The user must have the root role to perform this operation. If the creation is successful, a success
   * message is returned. If the user lacks permissions or the creation fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the new currency data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the creation is successful, or an error if the operation fails.
   */
  createCurrency: Scalars['String']['output']
  /**
   * Creates a new driver in the database.
   *
   * This asynchronous function creates a new driver in the `drivers` table.
   * The driver is created with the provided `input` parameters.
   * If the query fails, an error message is logged and returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters for creating a new driver.
   *
   * # Returns
   *
   * A `Result` containing a success message if the query is successful, or an error
   * containing the description of the error if the query fails.
   */
  createDriver: Scalars['String']['output']
  /**
   * Creates a new good in the database.
   *
   * This asynchronous function creates a new good in the `goods` table using the provided `input`.
   * The user must have the appropriate permissions and be the owner of the good to perform this operation.
   * If the creation is successful, a success message is returned. If the user lacks permissions or the creation fails,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the new good data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the creation is successful, or an error if the operation fails.
   */
  createGood: Scalars['String']['output']
  /**
   * Creates a new level in the database.
   *
   * This asynchronous function creates a new level in the `levels` table using the provided `input`.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `tx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the `level`, `merchant_id`, `name`, `min_points`, `discount_rate`, and `benefits` of the level.
   *
   * # Returns
   *
   * A `Result` containing a success message if the query is successful, or an error containing
   * the description of the error if the query fails.
   */
  createLevel: Scalars['String']['output']
  /**
   * Creates a new machine in the database.
   *
   * This asynchronous function requires a role other than `ROOT` and a valid `merchant_id`
   * to execute. If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters for creating a new machine.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the query is successful, or an error containing
   * the description of the error if the query fails.
   */
  createMachine: Scalars['String']['output']
  /**
   * Creates a new machine group in the database.
   *
   * This asynchronous function creates a new machine group in the `machine_groups` table using the provided `input`.
   * If the user lacks permissions or the create process fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the machine group data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the create is successful,
   * or an error containing the description of the error if the create fails or the user lacks permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the merchant does not exist, or if the create process fails.
   */
  createMachineGroup: Scalars['String']['output']
  /**
   * Creates a new machine recipe in the database.
   *
   * This asynchronous function creates a new machine recipe in the `machine_recipes` table using the provided `input`.
   * If the user lacks permissions or the create process fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the machine recipe data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the create is successful,
   * or an error containing the description of the error if the create fails or the user lacks permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the machine does not exist, or if the create process fails.
   */
  createMachineRecipes: Scalars['String']['output']
  /**
   * Creates a new merchant member in the database.
   *
   * This asynchronous function creates a new merchant member in the `merchant_members` table using the provided `input`.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the merchant to associate the new member with.
   * * `input` - The input parameters containing the `merchant_id`, `machine_id`, `user_id`, `card_no`, `balance`, `points`, `total_points`, `level`, and `status` of the merchant member.
   *
   * # Returns
   *
   * A `Result` containing a success message if the query is successful, or an error containing
   * the description of the error if the query fails.
   */
  createMember: Scalars['String']['output']
  /**
   * Creates a new menu entry in the database.
   *
   * This method constructs a `Menu` object from the provided `MenuInput` and
   * stores it in the database. The metadata is serialized to a JSON string.
   * If the operation succeeds, an "ok" string is returned. Otherwise, an error
   * message is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, used to access application state.
   * * `input` - A `MenuInput` object containing the details of the menu to be created.
   *
   * # Errors
   *
   * Returns an error if the menu creation operation fails.
   */
  createMenu: Scalars['String']['output']
  /**
   * Creates a new merchant in the database.
   *
   * The merchant is created with the provided `input` parameters and associated
   * with the currently logged-in user. If the user lacks permission,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters for creating a new merchant.
   *
   * # Returns
   *
   * A `Result` containing a success message if the merchant was created successfully,
   * or an error if the operation fails.
   */
  createMerchant: Scalars['String']['output']
  /**
   * Creates a new invitation code for a merchant.
   *
   * This asynchronous function creates a new invitation code for a merchant specified by the currently logged-in user.
   * The user must have the root role or be the owner of the merchant to perform this operation. If the creation is
   * successful, the generated invitation code is returned. Otherwise, an error is returned if the user lacks the
   * necessary permissions, the merchant does not exist, or the creation fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   *
   * # Returns
   *
   * A `Result` containing the generated invitation code if the creation is successful, or an error if the operation
   * fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, the merchant does not exist, or the creation
   * fails.
   */
  createMerchantInvitationCode: Scalars['String']['output']
  /**
   * Creates a new model in the database.
   *
   * This asynchronous function creates a new model in the `models` table.
   * The model is created with the provided `input` parameters and associated
   * with the currently logged-in merchant. If the merchant lacks permission,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters for creating a new model.
   *
   * # Returns
   *
   * A `Result` containing a success message if the model was created successfully,
   * or an error if the operation fails.
   */
  createModel: Scalars['String']['output']
  /**
   * Creates a new order.
   *
   * This asynchronous function creates a new order in the database.
   * The order is created with the provided `input` parameters and associated
   * with the currently logged-in user. If the user lacks permission,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters for creating a new order.
   *
   * # Returns
   *
   * A `Result` containing the new order's id if the operation is successful,
   * or an error containing the description of the error if the operation fails.
   */
  createOrder: Scalars['Int']['output']
  /**
   * Creates a new payment_platform in the database.
   *
   * The `create_payment_platform` function requires a role of `ROOT` to execute.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The payment_platform data to create.
   *
   * # Returns
   *
   * A `Result` containing a success message if the payment_platform was created successfully,
   * or an error containing the description of the error if the query fails.
   */
  createPaymentPlatform: Scalars['String']['output']
  /**
   * Creates a new permission in the database.
   *
   * # Errors
   *
   * If the database insertion fails, the error is returned as a `Box<dyn std::error::Error>`.
   *
   * # Returns
   *
   * A `Result` which is:
   * * `Ok(String)` - A success message if the permission is created successfully.
   * * `Err(Error)` - An error message if the permission creation fails.
   */
  createPermission: Scalars['String']['output']
  /**
   * Creates a new permission type.
   *
   * # Errors
   *
   * *   If the database insertion fails, the error is returned as a `Box<dyn std::error::Error>`.
   */
  createPermissionType: Scalars['String']['output']
  /**
   * Creates a new pickup code in the database.
   *
   * This asynchronous function takes a `PickupCodeInput` object as input and returns a `Result` containing
   * a success message if the create is successful, or an error containing the description of the error if
   * the create fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the pickup code data.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the create is successful, or an error containing the description of the error if the create fails.
   */
  createPickupCodes: Scalars['String']['output']
  /**
   * Creates a new product in the database.
   *
   * This asynchronous function creates a new product in the `products` table.
   * The product is created with the provided `input` parameters and associated
   * with the currently logged-in merchant. If the merchant lacks permission,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters for creating a new product.
   *
   * # Returns
   *
   * A `Result` containing a success message if the product was created successfully,
   * or an error if the operation fails.
   */
  createProduct: Scalars['String']['output']
  /**
   * Creates a new user in the database.
   *
   * This asynchronous function creates a new user in the `users` table.
   * The function requires the user to have the `ROOT` role to execute.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing application data and state.
   * * `input` - A `UserProfileInput` object containing the user's email, username, and other profile information.
   *
   * # Returns
   *
   * A `Result` containing a string with the value `"ok"` if the user is created successfully,
   * or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the `ROOT` role, if the email is already in use,
   * or if there is a failure during the user creation process.
   */
  createProfile: Scalars['String']['output']
  /**
   * Creates a new promotion in the database.
   *
   * This asynchronous function creates a new promotion in the database with the
   * provided `input` parameters. The user must have the root role to perform this
   * operation. If the creation is successful, a success message is returned.
   * If the user lacks permissions or the creation fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the new promotion data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the creation is successful, or an error
   * containing the description of the error if the query fails.
   */
  createPromotion: Scalars['String']['output']
  /**
   * Creates a new recipe in the database.
   *
   * This asynchronous function creates a new recipe in the `recipes` table using the provided `input`.
   * If the user lacks permissions or the create process fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the recipe data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the create is successful,
   * or an error containing the description of the error if the create fails or the user lacks permissions.
   */
  createRecipe: Scalars['String']['output']
  /**
   * Creates a new recipe_i18n in the database.
   *
   * This asynchronous function creates a new recipe_i18n in the `recipe_i18ns` table using the provided `input`.
   * If the recipe does not exist, an error message is logged and the error is returned.
   * If the create process fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the recipe_i18n data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the create is successful,
   * or an error containing the description of the error if the create fails or the recipe does not exist.
   */
  createRecipeI18N: Scalars['String']['output']
  /**
   * Creates a new role in the database.
   *
   * This asynchronous function creates a new role in the `roles` table with the given input.
   * If the query fails, an error message is logged and returned.
   *
   * # Arguments
   *
   * * `input` - The role to create.
   *
   * # Returns
   *
   * A `Result` containing a success message if the query is successful, or an error
   * containing the description of the error if the query fails.
   */
  createRole: Scalars['String']['output']
  /**
   * Creates a new setting in the database.
   *
   * This method constructs a `Setting` object from the provided `SettingInput` and
   * stores it in the database. Only users with the `ROOT` role have permission to
   * create a setting. If the operation succeeds, an "ok" string is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, used to access application state and user information.
   * * `input` - A `SettingInput` object containing the details of the setting to be created.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions or if
   * the setting creation operation fails.
   */
  createSetting: Scalars['String']['output']
  /**
   * Creates a new unit in the database.
   *
   * This asynchronous function creates a new unit using the provided `input` parameters.
   * The unit is associated with the currently logged-in user, and the user must not have
   * the root or guest role to perform this operation. If the creation is successful,
   * a success message is returned. If the user lacks permissions or the creation fails,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the new unit data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the creation is successful, or an error
   * if the operation fails.
   */
  createUnit: Scalars['String']['output']
  /**
   * Debugging endpoint for testing purposes.
   *
   * This endpoint is used to perform debugging tasks, such as testing the
   * authentication and authorization of the API. It returns a JSON object
   * with a list of debugging objects, each containing information about the
   * debugging task.
   *
   * The request must contain a valid `LoggedInMachine` extension, which is
   * used to authenticate and authorize the request. The machine must be
   * connected via a serial port, otherwise the request will be rejected.
   *
   * The response will contain a JSON object with a single string field, which
   * contains the debugging information.
   */
  debugging: Scalars['String']['output']
  /**
   * Deletes an existing account by its unique identifier.
   *
   * This asynchronous method deletes an account from the database based
   * on the provided `id`. It first attempts to retrieve the account
   * to ensure it exists before proceeding with the deletion process.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the account to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * account was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the account is not found or if there is a failure
   * during the deletion process.
   */
  deleteAccount: Scalars['String']['output']
  /**
   * Deletes an existing alarm_event by its unique identifier.
   *
   * This asynchronous function requires a role of `ROOT` to execute.
   * It marks an alarm_event as deleted in the database by setting its
   * `deleted_at` timestamp. If the deletion process fails, an error
   * message is logged and returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the alarm_event to be deleted.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the deletion is successful, or an error containing
   * the description of the error if the operation fails.
   */
  deleteAlarmEvent: Scalars['String']['output']
  /**
   * Deletes an alarm_platform by its unique identifier.
   *
   * This asynchronous function requires a role of `ROOT` to execute.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the alarm_platform to delete.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the query is successful, or an error containing
   * the description of the error if the query fails.
   */
  deleteAlarmPlatform: Scalars['String']['output']
  /**
   * Deletes an announcement by its unique identifier.
   *
   * This asynchronous function marks an announcement as deleted in the database by setting its `deleted_at` timestamp.
   * If the query fails or no rows are affected, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the announcement to delete.
   *
   * # Returns
   *
   * A `Result` containing a string with the value `"ok"` if the query is successful, or an error containing
   * the description of the error if the query fails or no rows are affected.
   */
  deleteAnnouncement: Scalars['String']['output']
  /**
   * Deletes an app version by its unique identifier.
   *
   * This asynchronous function deletes an app version in the `app_versions` table
   * by marking it as deleted. It checks whether the current user has the necessary
   * permissions, and whether the app version belongs to the user's merchant. If the
   * app version is successfully deleted, a success message is returned. Otherwise,
   * an error is returned if the user lacks permissions, the app version does not
   * belong to the merchant, or if the deletion process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the app version to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the app version was deleted
   * successfully, or an error if the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the app version does not
   * belong to the user's merchant, or if the deletion process fails.
   */
  deleteAppVersion: Scalars['String']['output']
  /**
   * Deletes a question from the database by its unique identifier.
   *
   * This asynchronous function deletes a question in the `articles` table by marking it as deleted.
   * It checks whether the current user has the necessary permissions, and whether the question
   * belongs to the user's merchant. If the question is successfully deleted, a success message
   * is returned. Otherwise, an error is returned if the user lacks permissions, the question does
   * not belong to the merchant, or if the deletion process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the question to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the question was deleted
   * successfully, or an error if the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the question does not
   * belong to the user's merchant, or if the deletion process fails.
   */
  deleteArticle: Scalars['String']['output']
  /**
   * Deletes a banner by its unique identifier.
   *
   * This asynchronous function deletes a banner from the `banners` table based on the
   * provided `id`. The user must have the necessary permissions (role other than `ROOT` and
   * be associated with a merchant) to perform this operation. If the deletion is successful,
   * a success message is returned. Otherwise, an error is returned if the user lacks
   * permissions, the banner cannot be retrieved, or the deletion process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the banner to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string `"ok"` if the banner was deleted successfully,
   * or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the banner
   * cannot be retrieved, or if the deletion process fails.
   */
  deleteBanner: Scalars['String']['output']
  /**
   * Deletes a category by its unique identifier.
   *
   * This asynchronous function marks a category as deleted in the database by
   * updating its `deleted_at` timestamp. It verifies if the current user has
   * the necessary permissions, and whether the category belongs to the user's merchant.
   * If the category is successfully deleted, a success message is returned. Otherwise,
   * an error is returned if the user lacks permissions, the category does not belong
   * to the merchant, or if the deletion process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the category to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the category was deleted
   * successfully, or an error if the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the category does not
   * belong to the user's merchant, or if the deletion process fails.
   */
  deleteCategory: Scalars['String']['output']
  /**
   * Deletes a channel by its unique identifier.
   *
   * This asynchronous function marks a channel as deleted in the `channels` table
   * by setting its `deleted_at` timestamp. It checks whether the current user has
   * the necessary permissions and whether the channel belongs to the user's merchant.
   * If the channel is successfully deleted, a success message is returned. Otherwise,
   * an error is returned if the user lacks permissions, the channel does not belong
   * to the merchant, or if the deletion process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the channel to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the channel was deleted
   * successfully, or an error if the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the channel does not
   * belong to the user's merchant, or if the deletion process fails.
   */
  deleteChannel: Scalars['String']['output']
  /**
   * Marks a coupon as deleted in the database by setting its `deleted_at` timestamp.
   *
   * This asynchronous function updates the `deleted_at` field of the coupon with the specified `id`
   * in the `coupons` table. If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `id` - The id of the coupon to mark as deleted.
   *
   * # Returns
   *
   * A `Result` containing `()` if the query is successful, or an error containing
   * the description of the error if the query fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the coupon does not
   * belong to the user's merchant, or if the deletion process fails.
   */
  deleteCoupon: Scalars['String']['output']
  /**
   * Deletes a coupon code from the database.
   *
   * This asynchronous function deletes a coupon code from the database by its `id`.
   * The user must have the root role to perform this operation. If the deletion is successful,
   * a success message is returned. If the user lacks permissions or the deletion fails,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the coupon code to delete.
   *
   * # Returns
   *
   * A `Result` containing a success message if the deletion is successful, or an error
   * containing the description of the error if the query fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, or if the deletion fails.
   */
  deleteCouponCode: Scalars['String']['output']
  /**
   * Deletes a coupon template from the database.
   *
   * This asynchronous function deletes a coupon template from the database by its `id`.
   * The user must have the root role to perform this operation. If the deletion is successful,
   * a success message is returned. If the user lacks permissions or the deletion fails,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the coupon template to delete.
   *
   * # Returns
   *
   * A `Result` containing a success message if the deletion is successful, or an error
   * containing the description of the error if the query fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, or if the deletion fails.
   */
  deleteCouponTemplate: Scalars['String']['output']
  /**
   * Deletes a currency by its unique identifier.
   *
   * This asynchronous function marks a currency as deleted in the database by
   * updating its `deleted_at` timestamp. It verifies if the current user has
   * the root role before performing the deletion. If the deletion fails, an
   * error message is logged and returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the currency to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * currency was deleted successfully, or an error if the operation fails or
   * the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions or if
   * the deletion process fails.
   */
  deleteCurrency: Scalars['String']['output']
  /**
   * Deletes a driver by its unique identifier.
   *
   * This asynchronous method deletes a driver from the database based on the provided `id`.
   * It first checks if the current user has the root role, which is required for this operation.
   * If the deletion is successful, a success message is returned. Otherwise, an error is returned
   * if the user lacks permissions or if the deletion process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the driver to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the driver was deleted
   * successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions or if the deletion
   * process fails.
   */
  deleteDriver: Scalars['String']['output']
  /**
   * Deletes an existing employee from a merchant.
   *
   * This asynchronous function deletes an existing employee from a merchant in the database.
   * It first checks if the current user has the necessary permissions. If the current user is
   * not the owner of the merchant or if the user lacks the root role, an error is returned.
   * If the deletion is successful, a success message is returned. Otherwise, an error is
   * returned if the operation fails or the user lacks the necessary permissions.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input containing the user id and merchant id to delete the employee.
   *
   * # Returns
   *
   * A `Result` containing a string with the value `"ok"` if the employee was deleted
   * successfully, or an error if the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the merchant does
   * not exist, or if the deletion process fails.
   */
  deleteEmployee: Scalars['String']['output']
  /**
   * Deletes an existing good in the database.
   *
   * This asynchronous function deletes a good with the specified `id` in the `goods` table
   * if the user has the appropriate permissions and is the owner of the good. If the deletion
   * is successful, a success message is returned. If the user lacks permissions or the deletion
   * fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the good to delete.
   *
   * # Returns
   *
   * A `Result` containing a success message if the deletion is successful, or an error if the operation fails.
   */
  deleteGood: Scalars['String']['output']
  /**
   * Deletes an existing level from the database.
   *
   * This asynchronous function deletes an existing level from the `levels` table using the provided `input`.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `tx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the `level`, `merchant_id`, `name`, `min_points`, `discount_rate`, and `benefits` of the level.
   *
   * # Returns
   *
   * A `Result` containing a success message if the query is successful, or an error containing
   * the description of the error if the query fails.
   */
  deleteLevel: Scalars['String']['output']
  /**
   * Deletes a machine by its unique identifier.
   *
   * This asynchronous function deletes a machine in the `machines` table by marking it as deleted.
   * It checks whether the current user has the necessary permissions, and whether the machine
   * belongs to the user's merchant. If the machine is successfully deleted, a success message
   * is returned. Otherwise, an error is returned if the user lacks permissions, the machine does
   * not belong to the merchant, or if the deletion process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the machine to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the machine was deleted
   * successfully, or an error if the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the machine does not
   * belong to the user's merchant, or if the deletion process fails.
   */
  deleteMachine: Scalars['String']['output']
  /**
   * Deletes a machine group by its unique identifier.
   *
   * This asynchronous function deletes a machine group from the database based
   * on the provided `id`. It first checks whether the current user has
   * the necessary permissions, and whether the machine group belongs to the user's
   * merchant. If the deletion is successful, a success message is returned.
   * Otherwise, an error is returned if the user lacks permissions, the machine group does not exist,
   * or if the deletion process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the machine group to delete.
   *
   * # Returns
   *
   * A `Result` containing a success message if the deletion is successful,
   * or an error containing the description of the error if the deletion fails or the user lacks permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions,
   * if the machine group does not exist, or if the deletion process fails.
   */
  deleteMachineGroup: Scalars['String']['output']
  /**
   * Deletes a machine log by its unique identifier.
   *
   * This asynchronous function requires a role of `ROOT` to execute.
   * It first retrieves the machine log to ensure it exists before proceeding
   * with the deletion process. If the deletion is successful, a success message
   * is returned. If the user lacks permissions or the deletion fails, an error
   * is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the machine log to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * machine log is deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions,
   * if the machine log cannot be retrieved, or if the deletion process fails.
   */
  deleteMachineLog: Scalars['String']['output']
  /**
   * Deletes a machine recipe by its unique identifier.
   *
   * This asynchronous function deletes a machine recipe from the database based
   * on the provided `id`. It first checks whether the current user has
   * the necessary permissions, and whether the machine recipe belongs to the user's
   * merchant. If the deletion is successful, a success message is returned.
   * Otherwise, an error is returned if the user lacks permissions or if the
   * deletion process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the machine recipe to be deleted.
   *
   * # Returns
   *
   * A `Result` containing a string with the value `"ok"` if the machine recipe was deleted
   * successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the machine recipe does not exist, or if the deletion process fails.
   */
  deleteMachineRecipe: Scalars['String']['output']
  /**
   * Deletes a merchant member by its unique identifier.
   *
   * This asynchronous function deletes a merchant member with the specified `id` in the `merchant_members` table.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the merchant member to delete.
   *
   * # Returns
   *
   * A `Result` containing a success message if the query is successful, or an error containing
   * the description of the error if the query fails.
   */
  deleteMember: Scalars['String']['output']
  /**
   * Deletes an existing menu by its unique identifier.
   *
   * This asynchronous method deletes a menu from the database based
   * on the provided `id`. It first attempts to retrieve the menu
   * to ensure it exists before proceeding with the deletion process.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the menu to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * menu was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the menu is not found or if there is a failure
   * during the deletion process.
   */
  deleteMenu: Scalars['String']['output']
  /**
   * Deletes a merchant by its unique identifier.
   *
   * This asynchronous function deletes a merchant in the `merchants` table by marking it as deleted.
   * It checks whether the current user has the necessary permissions, and whether the merchant
   * exists. If the merchant is successfully deleted, a success message is returned. Otherwise, an
   * error is returned if the user lacks permissions, the merchant does not exist, or if the deletion
   * process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the merchant to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the merchant was deleted
   * successfully, or an error if the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the merchant does not
   * exist, or if the deletion process fails.
   */
  deleteMerchant: Scalars['String']['output']
  /**
   * Deletes a model from the database by its unique identifier.
   *
   * This asynchronous function deletes a model in the `models` table by marking it as deleted.
   * It checks whether the current user has the necessary permissions, and whether the model
   * belongs to the user's merchant. If the model is successfully deleted, a success message
   * is returned. Otherwise, an error is returned if the user lacks permissions, the model does
   * not belong to the merchant, or if the deletion process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the model to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the model was deleted
   * successfully, or an error if the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the model does not
   * belong to the user's merchant, or if the deletion process fails.
   */
  deleteModel: Scalars['String']['output']
  /**
   * Deletes a notification by its unique identifier.
   *
   * This asynchronous method deletes a notification from the database based on the provided `id`.
   * It first checks if the current user has the root role, which is required for this operation.
   * If the deletion is successful, a success message is returned. Otherwise, an error is returned
   * if the user lacks permissions or if the deletion process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the notification to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the notification was deleted
   * successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions or if the deletion
   * process fails.
   */
  deleteNotification: Scalars['String']['output']
  /**
   * Deletes an existing order by its unique identifier.
   *
   * This asynchronous method deletes an order from the database based
   * on the provided `id`. It first checks whether the current user has
   * the necessary permissions and whether the order belongs to the user's
   * merchant. If the deletion is successful, a success message is returned.
   * Otherwise, an error is returned if the user lacks permissions or if the
   * deletion process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the order to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * order was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions,
   * if the order does not belong to the user's merchant, or if the deletion
   * process fails.
   */
  deleteOrder: Scalars['String']['output']
  /**
   * Deletes an existing payment_platform by its unique identifier.
   *
   * The `delete_payment_platform` function requires a role of `ROOT` to execute.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the payment_platform to delete.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the query is successful, or an error containing
   * the description of the error if the query fails.
   */
  deletePaymentPlatform: Scalars['String']['output']
  /**
   * Deletes an existing permission by its unique identifier.
   *
   * This asynchronous method deletes a permission from the database based
   * on the provided `id`. It first attempts to retrieve the permission
   * to ensure it exists before proceeding with the deletion process.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the permission to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * permission was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the permission is not found or if there is a failure
   * during the deletion process.
   */
  deletePermission: Scalars['String']['output']
  /**
   * Deletes an existing permission type by its unique identifier.
   *
   * This asynchronous method deletes a permission type from the database based
   * on the provided `id`. It first attempts to retrieve the permission type
   * to ensure it exists before proceeding with the deletion process.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the permission type to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * permission type was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the permission type is not found or if there is a failure
   * during the deletion process.
   */
  deletePermissionType: Scalars['String']['output']
  /**
   * Deletes a pickup code in the database.
   *
   * This asynchronous function takes a `Context` and an id as input and returns a `Result` containing
   * a success message if the delete is successful, or an error containing the description of the error if the delete fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the pickup code to delete.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the delete is successful, or an error containing the description of the error if the delete fails.
   */
  deletePickupCodes: Scalars['String']['output']
  /**
   * Deletes an existing product in the database.
   *
   * This asynchronous function deletes a product with the specified `id` in the `products` table
   * if the user has the appropriate permissions and is the owner of the product. If the deletion
   * is successful, a success message is returned. If the user lacks permissions or the deletion
   * fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the product to delete.
   *
   * # Returns
   *
   * A `Result` containing a success message if the deletion is successful, or an error if the operation fails.
   */
  deleteProduct: Scalars['String']['output']
  /**
   * Deletes an existing promotion in the database.
   *
   * This asynchronous function deletes a promotion with the specified `id` in the `promotions` table
   * if the user has the appropriate permissions. If the deletion
   * is successful, a success message is returned. If the user lacks permissions or the deletion
   * fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the promotion to delete.
   *
   * # Returns
   *
   * A `Result` containing a success message if the deletion is successful, or an error if the operation fails.
   */
  deletePromotion: Scalars['String']['output']
  /**
   * Deletes a recipe by its unique identifier.
   *
   * This asynchronous function deletes a recipe from the database based
   * on the provided `id`. It first checks whether the current user has
   * the necessary permissions, and whether the recipe belongs to the user's
   * merchant. If the deletion is successful, a success message is returned.
   * Otherwise, an error is returned if the user lacks permissions or if the
   * deletion process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the recipe to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the recipe was deleted
   * successfully, or an error if the operation fails.
   */
  deleteRecipe: Scalars['String']['output']
  /**
   * Deletes a recipe_i18n in the database.
   *
   * This asynchronous function takes an id and deletes the associated row in the `recipe_i18ns` table.
   * If the recipe does not exist, an error message is logged and the error is returned.
   * If the deletion process fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the recipe_i18n to be deleted.
   *
   * # Returns
   *
   * A `Result` containing a success message if the deletion is successful,
   * or an error containing the description of the error if the deletion fails or the recipe does not exist.
   */
  deleteRecipeI18N: Scalars['String']['output']
  /**
   * Deletes a role from the database by its id.
   *
   * This function requires the root role or the permission to rebind the menu.
   *
   * # Arguments
   *
   * * `ctx` - The context of the request, which must contain the `AppState` and `LoggedInUser`.
   * * `id` - The id of the role to delete.
   *
   * # Returns
   *
   * A `Result` containing a success message if the deletion is successful, or an error if the operation fails or the user lacks the necessary permissions.
   */
  deleteRole: Scalars['String']['output']
  /**
   * Deletes an existing setting by its unique identifier.
   *
   * This asynchronous method deletes a setting from the database based
   * on the provided `id`. It first checks the current user's permissions
   * to ensure they have the `ROOT` role before proceeding with the deletion.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the setting to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * setting was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions,
   * if the setting is not found, or if there is a failure during the deletion process.
   */
  deleteSetting: Scalars['String']['output']
  /**
   * Deletes a unit by its unique identifier.
   *
   * This asynchronous function deletes a unit from the database by
   * updating its `deleted_at` timestamp. It verifies if the current user has
   * the root role before performing the deletion. If the deletion fails, an
   * error message is logged and returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the unit to be deleted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * unit was deleted successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions,
   * if the unit does not belong to the user's merchant, or if the deletion
   * process fails.
   */
  deleteUnit: Scalars['String']['output']
  /**
   * Deliver an order by its unique identifier.
   *
   * This asynchronous function sets the order's delivery status to `DELIVERING` and
   * sends a message to the MQTT broker to initiate the delivery process. It also
   * keeps track of the delivery status in Redis and updates the order's status in
   * the database accordingly. If the delivery process fails or the order's status
   * is not `PENDING` or `DELIVERING`, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the order to be delivered.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the order was
   * delivered successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions,
   * if the order does not belong to the user's merchant, or if the delivery
   * process fails.
   */
  deliver: DeliverySummaryObject
  /**
   * Signs in a user using the provided input.
   *
   * This asynchronous function processes a sign-in request. The function utilizes the
   * provided `input` to authenticate a user and return a token or relevant response
   * indicating the result of the sign-in operation.
   *
   * # Arguments
   *
   * * `ctx` - A reference to the GraphQL context.
   * * `input` - A `String` containing the input necessary for user sign-in.
   *
   * # Returns
   *
   * A `Result` containing a `String` representing the sign-in result if successful,
   * or an `Error` if the operation fails.
   */
  login: Scalars['String']['output']
  /**
   * Logs in the machine with the provided credentials.
   *
   * The input is encrypted using a secret key that is shared between the client and
   * the server. The decrypted input is expected to contain the following parameters:
   *
   * * `username`: The machine number.
   * * `password`: The machine password.
   * * `sign`: The signature of the input parameters.
   *
   * The function first verifies the signature, then checks if the machine exists
   * and if the password matches. If the machine is not online, it updates the
   * machine's status to online. Finally, it generates a JWT token for the machine
   * and returns it.
   *
   * # Errors
   *
   * Returns an error if the input is invalid, the machine does not exist, the
   * password is incorrect, or if the token generation fails.
   */
  loginWithCredential: Scalars['String']['output']
  /**
   * Logs out the current user and update the user log to set logout time.
   *
   * This method is used to log out the current user and update the user log
   * by setting the logout time to the current time. The user log is updated
   * by calling the `update_user_log` method of `UserLoader` with the current
   * user's id.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `_input` - A string which is not used in this method.
   *
   * # Returns
   *
   * A `Result` containing a success message if the operation is successful,
   * or an error if the operation fails.
   */
  logout: Scalars['String']['output']
  /**
   * Logs out the machine from the system.
   *
   * This function is used to end the session of a machine that was previously logged in.
   * It takes a Context and a String as input, but does not make use of them.
   *
   * # Returns
   *
   * A Result containing a String with the value `"ok"` if the logout is successful,
   * or an error if the operation fails.
   */
  logoutWithCredential: Scalars['String']['output']
  /**
   * Purge the cache for the user with the given ID.
   *
   * This function takes a user ID as an argument and clears the cache for that user.
   * If the cache is successfully cleared, the function returns a success message as a string.
   * If there is an error during the cache clearing process, the function returns an error message.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing application data and state.
   * * `input` - The ID of the user whose cache is to be cleared.
   *
   * # Returns
   *
   * A `Result` containing a success message if the cache is cleared successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if there is a failure during the cache clearing process.
   */
  purgeUserCache: Scalars['String']['output']
  /**
   * Reboots a machine by its unique identifier.
   *
   * This asynchronous function reboots a machine in the `machines` table by sending a reboot
   * command to the machine. It checks whether the current user has the necessary permissions,
   * and whether the machine belongs to the user's merchant. If the machine is successfully rebooted,
   * a success message is returned. Otherwise, an error is returned if the user lacks permissions,
   * the machine does not belong to the merchant, or if the reboot process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the machine to be rebooted.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the machine was rebooted
   * successfully, or an error if the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the machine does not
   * belong to the user's merchant, or if the reboot process fails.
   */
  rebootMachine: Scalars['String']['output']
  /**
   * Creates a new employee in the database.
   *
   * This asynchronous function requires a role other than `ROOT` and a valid `merchant_id`
   * to execute. If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the `merchant_id` and `user_id` to create the
   * employee.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the query is successful, or an error containing
   * the description of the error if the query fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the merchant does not
   * exist, or if the creation process fails.
   */
  registerAsEmployee: Scalars['String']['output']
  /**
   * Registers a machine with the given credential.
   *
   * This function is currently unimplemented and will always return "ok".
   *
   * # Arguments
   *
   * * `_ctx`: The GraphQL context containing shared data, including the application state.
   * * `_input`: The input parameters for registering a new machine.
   *
   * # Returns
   *
   * A `Result` containing a string with the value `"ok"` if the registration is successful, or an error if the operation fails.
   */
  registerWithCredential: Scalars['String']['output']
  /**
   * Replenishes the inventory of a product in a machine.
   *
   * This asynchronous function replenishes the inventory of a product specified by `id` in the
   * machine with the specified `machine_id`. The function checks whether the current user has
   * the necessary permissions and whether the machine belongs to the user's merchant. If the
   * user lacks permissions, the machine does not belong to the merchant, or the update of the
   * product inventory fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `machine_id` - The unique identifier of the machine in which to replenish the product.
   * * `id` - The unique identifier of the product to replenish.
   *
   * # Returns
   *
   * A `Result` containing a success message if the replenishment is successful, or an error if
   * the operation fails or the user lacks necessary permissions.
   */
  replenishProductInventory: Scalars['String']['output']
  /**
   * Resets a merchant's secret by decrypting the provided input string using the app's secret key.
   *
   * The input string must be encrypted using the app's secret key and must contain the merchant's ID and the new secret.
   *
   * The user must have the root role or be the owner of the merchant to perform this operation. If the operation is
   * successful, the new secret is returned. Otherwise, an error is returned if the user lacks the necessary
   * permissions, the merchant does not exist, or the decryption fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The encrypted input string containing the merchant's ID and the new secret.
   *
   * # Returns
   *
   * A `Result` containing the new secret if the operation is successful, or an error if the operation fails or the
   * user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, the merchant does not exist, or the decryption
   * fails.
   */
  resetMerchantSecret: Scalars['String']['output']
  /**
   * Sets a machine's power schedule.
   *
   * This function takes a machine ID and a `PowerScheduleInput` object as input.
   * It checks if the current user has the necessary permissions and whether the machine belongs
   * to the user's merchant. Then, it checks if the machine is online and active. If both
   * conditions are met, it publishes an MQTT message to the machine topic with the power
   * schedule set method. If the power schedule is set successfully, a success message is
   * returned. Otherwise, an error is returned if the user lacks permissions, the machine does not
   * belong to the merchant, or if the power schedule set process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the machine to be set power schedule.
   * * `input` - The `PowerScheduleInput` object containing the power schedule data.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the power schedule is set
   * successfully, or an error if the operation fails or the user lacks the necessary permissions.
   */
  setMachinePowerSchedule: Scalars['String']['output']
  /**
   * Shuts down a machine identified by `id` by sending a shutdown signal.
   *
   * This asynchronous function checks if the current user has the necessary permissions
   * and whether the machine belongs to the user's merchant before proceeding with the
   * shutdown. If the machine is online and active, an MQTT message is sent to the machine
   * topic with the shutdown method. If the shutdown is successful, a success message is returned.
   * If the user lacks permissions, the machine does not belong to the merchant, or if the shutdown
   * fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the current user and
   * the application state.
   * * `id` - The unique identifier of the machine to shutdown.
   *
   * # Returns
   *
   * A `Result` containing a success message if the shutdown is successful, or an error if
   * the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the machine
   * does not belong to the merchant, or if the shutdown operation fails.
   */
  shutdownMachine: Scalars['String']['output']
  /**
   * Signs in a user using the provided input.
   *
   * This asynchronous function processes a sign-in request. The function utilizes the
   * provided `input` to authenticate a user and return a token or relevant response
   * indicating the result of the sign-in operation.
   *
   * # Arguments
   *
   * * `ctx` - A reference to the GraphQL context.
   * * `input` - A `String` containing the input necessary for user sign-in.
   *
   * # Returns
   *
   * A `Result` containing a `String` representing the sign-in result if successful,
   * or an `Error` if the operation fails.
   */
  signin: Scalars['String']['output']
  /**
   * Updates an existing account with the given parameters.
   *
   * This asynchronous method updates an account in the database using the
   * provided `id` and `input`. Existing account details are modified based
   * on the non-null fields in the `input`, while the `platform_type` is
   * conditionally updated if a new value is provided.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the account to be updated.
   * * `input` - The input parameters containing the updated account details.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * account was updated successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the account is not found or if there is a failure
   * during the update process.
   */
  updateAccount: Scalars['String']['output']
  /**
   * Updates an existing alarm_event in the database.
   *
   * This asynchronous function updates an alarm_event with the specified `id` using the provided `input`.
   * The user must have the root role to perform this operation. If the update is successful, a success
   * message is returned. If the user lacks permissions or the update fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the alarm_event to update.
   * * `input` - The input parameters containing the updated alarm_event data.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the update is successful, or an error containing the description
   * of the error if the operation fails.
   */
  updateAlarmEvent: Scalars['String']['output']
  /**
   * Updates an alarm_platform in the database.
   *
   * This asynchronous function requires a role of `ROOT` to execute.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the alarm_platform to update.
   * * `input` - The alarm_platform data to update.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the query is successful, or an error containing
   * the description of the error if the query fails.
   */
  updateAlarmPlatform: Scalars['String']['output']
  /**
   * Updates an existing announcement in the database.
   *
   * This asynchronous function updates an announcement with the specified `id` in the `announcements` table
   * using the provided `input`. The user must have the root role and be the owner of the announcement to perform this operation.
   * If the update is successful, a success message is returned. If the user lacks permissions or the update fails,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the announcement to update.
   * * `input` - The input parameters containing the updated announcement data.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the update is successful, or an error containing the description
   * of the error if the operation fails.
   */
  updateAnnouncement: Scalars['String']['output']
  /**
   * Updates an existing app version in the database.
   *
   * This asynchronous method updates an app version in the database using the
   * provided `id` and `input`. Existing app version details are modified based
   * on the non-null fields in the `input`, while the `platform_type` is
   * conditionally updated if a new value is provided.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the app version to be updated.
   * * `input` - The input parameters containing the updated app version details.
   *
   * # Returns
   *
   * A `Result` containing a string with the value `"ok"` if the app version was updated
   * successfully, or an error if the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the app version is not found or if there is a failure
   * during the update process.
   */
  updateAppVersion: Scalars['String']['output']
  /**
   * Updates an existing article in the database.
   *
   * This asynchronous function updates an article in the database using the
   * provided `id` and `input`. Existing article details are modified based
   * on the non-null fields in the `input`.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the article to be updated.
   * * `input` - The input parameters containing the updated article details.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * article was updated successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the article is not found or if there is a failure
   * during the update process.
   */
  updateArticle: Scalars['String']['output']
  /**
   * Updates an existing banner in the database.
   *
   * This asynchronous function updates the details of a banner with the specified `id`
   * in the `banners` table using the provided `input`. The function checks whether the
   * current user has the necessary permissions and whether the banner belongs to the
   * user's merchant before proceeding with the update. If the update is successful, a
   * success message is returned. If the user lacks permissions, the banner does not
   * belong to the merchant, or the update fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the banner to update.
   * * `input` - The input parameters containing the updated banner data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if
   * the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the banner
   * does not belong to the user's merchant, or if the update process fails.
   */
  updateBanner: Scalars['String']['output']
  /**
   * Updates an existing category in the database.
   *
   * This asynchronous function updates a category with the specified `id` in the `categories` table
   * using the provided `input`. The function checks whether the current user has the necessary
   * permissions and whether the category belongs to the user's merchant before proceeding with the
   * update. If the update is successful, a success message is returned. If the user lacks
   * permissions, the category does not belong to the merchant, or the update fails, an error is
   * returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the category to update.
   * * `input` - The input parameters containing the updated category data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if the
   * operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the category does not
   * belong to the user's merchant, or if the update process fails.
   */
  updateCategory: Scalars['String']['output']
  /**
   * Updates an existing channel in the database.
   *
   * This asynchronous function updates the details of a channel with the specified `id`
   * in the `channels` table using the provided `input`. The function checks whether the
   * current user has the necessary permissions and whether the channel belongs to the
   * user's merchant before proceeding with the update. If the update is successful, a
   * success message is returned. If the user lacks permissions, the channel does not
   * belong to the merchant, or the update fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the channel to update.
   * * `input` - The input parameters containing the updated channel data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if
   * the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the channel
   * does not belong to the user's merchant, or if the update process fails.
   */
  updateChannel: Scalars['String']['output']
  /**
   * Updates a coupon in the database.
   *
   * This asynchronous function updates a coupon in the `coupons` table
   * using the provided `data`. If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The context of the GraphQL API.
   * * `id` - The id of the coupon to update.
   * * `input` - The coupon data to update, including the `id` of the coupon.
   *
   * # Returns
   *
   * A `Result` containing `()` if the query is successful, or an error containing
   * the description of the error if the query fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the coupon does not
   * belong to the user's merchant, or if the update process fails.
   */
  updateCoupon: Scalars['String']['output']
  /**
   * Updates a coupon code in the database.
   *
   * This asynchronous function updates a coupon code in the database with the
   * provided `input` parameters. The user must have the root role to perform this
   * operation. If the update is successful, a success message is returned. If the
   * user lacks permissions or the update fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the coupon code to update.
   * * `input` - The input parameters containing the new coupon code data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error
   * containing the description of the error if the query fails.
   */
  updateCouponCode: Scalars['String']['output']
  /**
   * Updates a coupon template in the database.
   *
   * This asynchronous function updates a coupon template in the database with the
   * provided `input` parameters. The user must have the root role to perform this operation.
   * If the update is successful, a success message is returned. If the user lacks
   * permissions or the update fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the coupon template to update.
   * * `input` - The input parameters containing the new coupon template data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error containing
   * the description of the error if the query fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, or if the update fails.
   */
  updateCouponTemplate: Scalars['String']['output']
  /**
   * Updates an existing currency in the database.
   *
   * This asynchronous function updates a currency with the specified `id` in the `currencies` table
   * using the provided `input`. The user must have the root role to perform this operation.
   * If the update is successful, a success message is returned. If the user lacks permissions or the update fails,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the currency to update.
   * * `input` - The input parameters containing the updated currency data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if the operation fails.
   */
  updateCurrency: Scalars['String']['output']
  /**
   * Updates an existing driver in the database.
   *
   * This asynchronous function updates a driver with the specified `id` in the `drivers` table
   * using the provided `input`. The user must have the root role to perform this operation.
   * If the update is successful, a success message is returned. If the user lacks permissions or the update fails,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the driver to update.
   * * `input` - The input parameters containing the updated driver data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if the operation fails.
   */
  updateDriver: Scalars['String']['output']
  /**
   * Updates an existing employee in the database.
   *
   * This asynchronous function updates an employee by deleting the employee from the merchant
   * and then adding the employee to the merchant. The user must have the necessary permissions
   * and the employee must belong to the merchant to perform this operation. If the update is
   * successful, a success message is returned. If the user lacks permissions, the employee does
   * not belong to the merchant, or the update fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the `merchant_id` and `user_id`.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if the
   * operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the employee does not
   * belong to the merchant, or if the update process fails.
   */
  updateEmployee: Scalars['String']['output']
  /**
   * Updates an existing good in the database.
   *
   * This asynchronous function updates a good with the specified `id` in the `goods` table
   * using the provided `input`. The user must have the appropriate permissions and be the owner
   * of the good to perform this operation. If the update is successful, a success message is returned.
   * If the user lacks permissions or the update fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the good to update.
   * * `input` - The input parameters containing the updated good data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if the operation fails.
   */
  updateGood: Scalars['String']['output']
  /**
   * Updates an existing level in the database.
   *
   * This asynchronous function updates an existing level in the `levels` table using the provided `input`.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `tx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the `level`, `merchant_id`, `name`, `min_points`, `discount_rate`, and `benefits` of the level.
   *
   * # Returns
   *
   * A `Result` containing a success message if the query is successful, or an error containing
   * the description of the error if the query fails.
   */
  updateLevel: Scalars['String']['output']
  /**
   * Updates an existing machine in the database.
   *
   * This asynchronous function updates the details of a machine with the specified `id`
   * in the `machines` table using the provided `input`. The function checks whether the
   * current user has the necessary permissions and whether the machine belongs to the
   * user's merchant before proceeding with the update. If the update is successful, a
   * success message is returned. If the user lacks permissions, the machine does not
   * belong to the merchant, or the update fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the machine to update.
   * * `input` - The input parameters containing the updated machine data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if
   * the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the machine
   * does not belong to the user's merchant, or if the update process fails.
   */
  updateMachine: Scalars['String']['output']
  /**
   * Updates a machine's configuration.
   *
   * This asynchronous function updates a machine's configuration
   * in the `machines` table. The function checks whether the current
   * user has the necessary permissions, and whether the machine belongs
   * to the user's merchant. If the update is successful, a success message
   * is returned. Otherwise, an error is returned if the user lacks permissions,
   * the machine does not belong to the merchant, or if the update process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `machine_id` - The unique identifier of the machine to update.
   * * `input` - The input parameters containing the updated machine configuration.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful,
   * or an error if the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions,
   * if the machine does not belong to the user's merchant, or if the update process fails.
   */
  updateMachineConfig: Scalars['String']['output']
  /**
   * Updates an existing machine group in the database.
   *
   * This asynchronous function updates a machine group by its unique identifier.
   * If the user lacks permissions, if the machine group does not exist, or if the update process fails,
   * an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the machine group to update.
   * * `input` - The input parameters containing the machine group data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful,
   * or an error containing the description of the error if the update fails or the user lacks permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions,
   * if the machine group does not exist, or if the update process fails.
   */
  updateMachineGroup: Scalars['String']['output']
  /**
   * Updates an existing machine recipe in the database.
   *
   * This asynchronous function updates the machine recipe with the specified `id`
   * in the `machine_recipes` table using the provided `input`. If the user lacks permissions
   * or the update process fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the machine recipe to update.
   * * `input` - The input parameters containing the machine recipe data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful,
   * or an error containing the description of the error if the update fails or the user lacks permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the machine recipe does not exist, or if the update process fails.
   */
  updateMachineRecipe: Scalars['String']['output']
  /**
   * Updates an existing merchant member in the database.
   *
   * This asynchronous function updates a merchant member with the specified `id` in the `merchant_members` table
   * using the provided `input`. If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the merchant member to update.
   * * `input` - The input parameters containing the `merchant_id`, `machine_id`, `user_id`, `card_no`, `balance`, `points`, `total_points`, `level`, and `status` of the merchant member.
   *
   * # Returns
   *
   * A `Result` containing a success message if the query is successful, or an error containing
   * the description of the error if the query fails.
   */
  updateMember: Scalars['String']['output']
  /**
   * Updates an existing menu in the database.
   *
   * This asynchronous method updates a menu in the database using the
   * provided `id` and `input`. Existing menu details are modified based
   * on the non-null fields in the `input`.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the menu to be updated.
   * * `input` - The input parameters containing the updated menu details.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the
   * menu was updated successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the menu is not found or if there is a failure
   * during the update process.
   */
  updateMenu: Scalars['String']['output']
  /**
   * Updates an existing merchant in the database.
   *
   * This asynchronous function updates a merchant with the specified `id` in the `merchants` table
   * using the provided `input`. The user must have the root role and be the owner of the merchant to perform
   * this operation. If the update is successful, a success message is returned. If the user lacks permissions or the update fails,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the merchant to update.
   * * `input` - The input parameters containing the updated merchant data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if the operation fails.
   */
  updateMerchant: Scalars['String']['output']
  /**
   * Updates a merchant config in the database.
   *
   * This asynchronous function updates a merchant config in the `merchant_configs` table using the provided `input`.
   * If the user lacks permission, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the `merchant_id`, `whitelist_ip`, `is_dev`, `debug`, `app_key`, and `reset_app_secret` of the merchant config.
   *
   * # Returns
   *
   * A `Result` containing a string with the value `"ok"` if the merchant config was updated
   * successfully, or an error if the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the merchant does
   * not exist, or if the update process fails.
   */
  updateMerchantConfig: Scalars['String']['output']
  /**
   * Updates the currencies of a merchant.
   *
   * This asynchronous function updates the `merchant_currencies` table by first removing
   * the currencies that are not in the given `ids` and then adding the currencies that
   * are not already associated with the merchant.
   *
   * The user must have the necessary permissions and the merchant must exist.
   * If the user is not an administrator, it can only query the merchant that the user belongs to.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `ids` - A vector of currency ids to associate with the merchant.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the update is successful, or an error if the update fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the merchant does not exist, or if the update fails.
   */
  updateMerchantCurrencies: Scalars['String']['output']
  /**
   * Updates the owner of a merchant.
   *
   * This asynchronous function updates the owner of a merchant specified by `merchant_id` to the user
   * specified by `user_id`. The user must have the root role or be the current owner of the merchant to
   * perform this operation. If the update is successful, a success message is returned. Otherwise, an error
   * is returned if the user lacks the necessary permissions, the merchant does not exist, or the update fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input containing the `merchant_id` and the `user_id` to assign as the new owner of the
   * merchant.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if the operation fails or
   * the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, the merchant does not exist, or the
   * update fails.
   */
  updateMerchantOwner: Scalars['String']['output']
  /**
   * Updates an existing model in the database.
   *
   * This asynchronous function updates a model with the specified `id` in the `models` table
   * using the provided `input`. The user must have the root role to perform this operation.
   * If the update is successful, a success message is returned. If the user lacks permissions or the update fails,
   * an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the model to update.
   * * `input` - The input parameters containing the updated model data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if the operation fails.
   */
  updateModel: Scalars['String']['output']
  /**
   * Updates a notification by its unique identifier.
   *
   * This asynchronous method updates a notification in the database based on the provided `id`.
   * It first checks if the current user has the root role, which is required for this operation.
   * If the update is successful, a success message is returned. Otherwise, an error is returned
   * if the user lacks permissions or if the update process fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the notification to be updated.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the notification was updated
   * successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions or if the update
   * process fails.
   */
  updateNotification: Scalars['String']['output']
  /**
   * Updates an existing payment_platform in the database.
   *
   * The `update_payment_platform` function requires a role of `ROOT` to execute.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the payment_platform to update.
   * * `input` - The payment_platform data to update.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the query is successful, or an error containing
   * the description of the error if the query fails.
   */
  updatePaymentPlatform: Scalars['String']['output']
  /**
   * Updates an existing permission in the database.
   *
   * # Errors
   *
   * If the database update fails, the error is returned as a `Box<dyn std::error::Error>`.
   *
   * # Returns
   *
   * A `Result` which is:
   * * `Ok(String)` - A success message if the permission is updated successfully.
   * * `Err(Error)` - An error message if the permission update fails.
   */
  updatePermission: Scalars['String']['output']
  /**
   * Updates an existing permission type in the database.
   *
   * The `id` parameter is used to identify the permission type to update.
   *
   * # Errors
   *
   * *   If the database query fails, the error is returned as a `Box<dyn std::error::Error>`.
   */
  updatePermissionType: Scalars['String']['output']
  /**
   * Updates a pickup code in the database.
   *
   * This asynchronous function takes an id and a `PickupCodeInput` object as input and returns a `Result` containing
   * a success message if the update is successful, or an error containing the description of the error if the update fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the pickup code to update.
   * * `input` - The input parameters containing the pickup code data.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the update is successful, or an error containing the description of the error if the update fails.
   */
  updatePickupCodes: Scalars['String']['output']
  /**
   * Updates an existing product in the database.
   *
   * This asynchronous function updates the details of a product with the specified `id`
   * in the `products` table using the provided `input`. The function checks whether the
   * current user has the necessary permissions and whether the product belongs to the
   * user's merchant before proceeding with the update. If the update is successful, a
   * success message is returned. If the user lacks permissions, the product does not
   * belong to the merchant, or the update fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the product to update.
   * * `input` - The input parameters containing the updated product data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if
   * the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the product
   * does not belong to the user's merchant, or if the update process fails.
   */
  updateProduct: Scalars['String']['output']
  /**
   * Updates the current user's profile with the provided information.
   *
   * This asynchronous function updates the current user's profile with the
   * provided `input` parameters. The `input` object contains the new values
   * for the user's username, email, profile URL, and phone number. If the
   * `password` field is provided and the current user has an email, the
   * user's password is updated with the provided password.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing application data and state.
   * * `input` - A `UserProfileInput` object containing the new profile data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the user's profile is updated
   * successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if there is a failure during the profile update process.
   */
  updateProfile: Scalars['String']['output']
  /**
   * Updates an existing promotion in the database.
   *
   * This asynchronous function updates a promotion with the specified `id` in the `promotions` table
   * using the provided `input`. The function checks whether the current user has the necessary
   * permissions and whether the promotion belongs to the user's merchant before proceeding with the
   * update. If the update is successful, a success message is returned. If the user lacks
   * permissions, the promotion does not belong to the merchant, or the update fails, an error is
   * returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the promotion to update.
   * * `input` - The input parameters containing the updated promotion data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if
   * the operation fails or the user lacks the necessary permissions.
   */
  updatePromotion: Scalars['String']['output']
  /**
   * Updates an existing recipe in the database.
   *
   * This asynchronous function updates the details of a recipe with the specified `id`
   * in the `recipes` table using the provided `input`. The function checks whether the
   * current user has the necessary permissions and whether the recipe belongs to the
   * user's merchant before proceeding with the update. If the update is successful, a
   * success message is returned. If the user lacks permissions, the recipe does not
   * belong to the merchant, or the update fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the recipe to update.
   * * `input` - The input parameters containing the updated recipe data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if
   * the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the recipe
   * does not belong to the user's merchant, or if the update process fails.
   */
  updateRecipe: Scalars['String']['output']
  /**
   * Updates a recipe_i18n in the database.
   *
   * This asynchronous function takes an id and a `RecipeI18nInput` and updates the associated
   * row in the `recipe_i18ns` table using the provided data. If the query fails or no rows are affected,
   * an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the recipe_i18n to be updated.
   * * `input` - The input parameters containing the recipe_i18n data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful,
   * or an error containing the description of the error if the update fails or the recipe does not exist.
   */
  updateRecipeI18N: Scalars['String']['output']
  /**
   * Updates an existing role in the database.
   *
   * This asynchronous function updates a role with the specified `id` in the `roles` table
   * using the provided `input`. The user must have the appropriate permissions to perform
   * this operation. If the update is successful, a success message is returned.
   * If the user lacks permissions or the update fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - A reference to the GraphQL context, containing the `AppState` and `LoggedInUser`.
   * * `id` - The unique identifier of the role to update.
   * * `input` - A `RoleInput` object containing the new role data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error
   * if the operation fails or the user lacks the necessary permissions.
   */
  updateRole: Scalars['String']['output']
  /**
   * Updates the menus associated with a role.
   *
   * This asynchronous function updates the `role_menus` table by associating the specified
   * menu IDs with the role. It checks if the current user has the necessary permissions
   * before proceeding with the update. If the query fails, an error message is logged and returned.
   *
   * # Arguments
   *
   * * `ctx` - The context of the request, which must contain the `AppState` and `LoggedInUser`.
   * * `id` - The id of the role to update menus for.
   * * `input` - The input containing the selected and indeterminate menu keys to associate with the role.
   *
   * # Returns
   *
   * A `Result` containing a success message if the query is successful, or an error
   * containing the description of the error if the query fails or the user lacks
   * the necessary permissions.
   */
  updateRoleMenus: Scalars['String']['output']
  /**
   * Updates the permissions associated with a role.
   *
   * This asynchronous function updates the permissions for a specified role in the database.
   * It first verifies that the current user has the necessary permissions to perform this action.
   * If the user lacks the required permissions or the update fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - A reference to the GraphQL context, containing the `AppState` and `LoggedInUser`.
   * * `id` - The unique identifier of the role whose permissions are to be updated.
   * * `input` - A vector of permission IDs to associate with the role.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error
   * if the operation fails or the user lacks the necessary permissions.
   */
  updateRolePermissions: Scalars['String']['output']
  /**
   * Updates an existing setting in the database.
   *
   * Only users with the `ROOT` role have permission to update a setting.
   * If the operation succeeds, an "ok" string is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, used to access application state and user information.
   * * `id` - The unique identifier of the setting to be updated.
   * * `input` - A `SettingInput` object containing the updated setting details.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions or if
   * the setting update operation fails.
   */
  updateSetting: Scalars['String']['output']
  /**
   * Updates an existing unit in the database.
   *
   * This asynchronous function updates the details of a unit with the specified `id`
   * in the `units` table using the provided `input`. The function checks whether the
   * current user has the necessary permissions and whether the unit belongs to the
   * user's merchant before proceeding with the update. If the update is successful,
   * a success message is returned. If the user lacks permissions, the unit does not
   * belong to the merchant, or the update fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the unit to update.
   * * `input` - The input parameters containing the updated unit data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error if
   * the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the unit
   * does not belong to the user's merchant, or if the update process fails.
   */
  updateUnit: Scalars['String']['output']
  updateUserAlarmConfig: Scalars['String']['output']
  /**
   * Updates the user menus in the database.
   *
   * This asynchronous function updates the `user_menus` table by first removing
   * the menus that are not in the given `menu_ids` and then adding the menus that
   * are not already associated with the user.
   *
   * If the database update fails, the error is returned as a `Box<dyn std::error::Error>`.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the user id and menu ids to associate with the user.
   *
   * # Returns
   *
   * A `Result` which is:
   * * `Ok("ok".to_string())` - If the update is successful.
   * * `Err(Error)` - If the update fails or the user lacks the necessary permissions.
   */
  updateUserMenus: Scalars['String']['output']
  /**
   * Updates the permissions associated with a user.
   *
   * This asynchronous function updates the permissions of a user with the specified `user_id`.
   * The user must have the appropriate permissions to perform this operation. If the update is
   * successful, a success message is returned. If the user lacks permissions or the
   * update fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - A reference to the GraphQL context, containing the `AppState` and `LoggedInUser`.
   * * `input` - A `UserPermissionInput` object containing the new permission data.
   *
   * # Returns
   *
   * A `Result` containing a success message if the update is successful, or an error
   * if the operation fails or the user lacks the necessary permissions.
   */
  updateUserPermissions: Scalars['String']['output']
  /**
   * Updates the role of an existing user in the database.
   *
   * This asynchronous function fetches the user by its `user_id` and updates
   * the user's role based on the `role_id` provided in the `input`.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing application data and state.
   * * `input` - A `UserRoleInput` object containing the `user_id` and the new `role_id`.
   *
   * # Returns
   *
   * Returns a `Result` containing a string with the value `"ok"` if the user's role is updated
   * successfully, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the user is not found, or if there is a failure during the role update process.
   */
  updateUserRole: Scalars['String']['output']
  /**
   * Updates a file in the database.
   *
   * This asynchronous function updates a file in the `files` table.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, used to access application state and user information.
   * * `file` - The file to update.
   *
   * # Returns
   *
   * A `Result` containing the id of the newly stored file if the query is successful,
   * or an error containing the description of the error if the query fails.
   */
  uploadFile: FileObject
  /**
   * Verifies and applies a coupon code.
   *
   * This asynchronous function verifies a coupon code and applies it to the current machine if it is valid.
   * The function will return an error if the coupon code is not found, if the coupon code is not owned by the current machine,
   * if the coupon code is not started, if the coupon code is ended, or if the coupon code is paused.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The coupon code to verify and apply.
   *
   * # Returns
   *
   * A `Result` containing the coupon code object if the verification and application are successful, or an error containing the description of the error if the verification and application fail.
   */
  verifyAndApplyCoupon: CouponCodeObject
  /**
   * Verifies the given authentication code and returns a JWT token if valid.
   *
   * This asynchronous function takes an authentication code as input and
   * verifies it against Redis. If the code is valid, the function returns a
   * JWT token for the associated user. If the code is invalid, the function
   * returns an error.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing application data and state.
   * * `input` - A `String` containing the authentication code to verify.
   *
   * # Returns
   *
   * A `Result` containing a JWT token as a `String` if the authentication
   * code is valid, or an error if the operation fails.
   *
   * # Errors
   *
   * Returns an error if the authentication code is invalid or if there is a
   * failure during the verification or token generation process.
   */
  verifyAuthCode: Scalars['String']['output']
  /**
   * Verifies the provided secret against the stored secret for a merchant.
   *
   * This asynchronous function decrypts the input to extract the secret and merchant ID,
   * retrieves the corresponding merchant from the database, and verifies the secret
   * against the stored hashed secret for the merchant. If the verification is successful,
   * a success message is returned. Otherwise, an error is returned if the secret is invalid,
   * the merchant does not exist, or if the input decryption fails.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - An encrypted string containing the `secret` and `merchant_id`.
   *
   * # Returns
   *
   * A `Result` containing `"ok"` if the secret is valid, or an error if the verification fails.
   *
   * # Errors
   *
   * Returns an error if the input decryption fails, if the merchant does not exist,
   * or if the secret is invalid.
   */
  verifyMerchantSecret: Scalars['String']['output']
  /**
   * Generates a JWT token for a user based on a QR code token.
   *
   * This asynchronous function retrieves a user's open ID from a QR code token
   * stored in Redis, and then generates a JWT token for the user. If the QR code
   * token is invalid or the user does not exist, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - A `String` representing the QR code token to query.
   *
   * # Returns
   *
   * A `Result` containing the generated JWT token as a `String` if successful,
   * or an error if the QR code token is invalid, the user does not exist, or
   * token generation fails.
   */
  wechatQrcodeToken?: Maybe<Scalars['String']['output']>
}

export type MutationBatchUpdateGoodsArgs = {
  input: BatchGoodInput
}

export type MutationBatchUpdateProductsArgs = {
  input: ProductBatchInput
  machine_id: Scalars['Int']['input']
}

export type MutationCancelOrderArgs = {
  id: Scalars['Int']['input']
  input?: InputMaybe<Scalars['String']['input']>
}

export type MutationClearMachinePowerScheduleArgs = {
  machine_id: Scalars['Int']['input']
}

export type MutationClearMalfunctionArgs = {
  machine_id: Scalars['Int']['input']
}

export type MutationCreateAccountArgs = {
  input: AccountInput
}

export type MutationCreateAlarmEventArgs = {
  input: AlarmEventInput
}

export type MutationCreateAlarmPlatformArgs = {
  input: AlarmPlatformInput
}

export type MutationCreateAnnouncementArgs = {
  input: AnnouncementInput
}

export type MutationCreateAppVersionArgs = {
  input: AppVersionInput
}

export type MutationCreateArticleArgs = {
  input: ArticleInput
}

export type MutationCreateBannerArgs = {
  input: BannerInput
}

export type MutationCreateCategoryArgs = {
  input: CategoryInput
}

export type MutationCreateChannelArgs = {
  input: ChannelInput
}

export type MutationCreateCouponArgs = {
  input: CouponInput
}

export type MutationCreateCouponCodeArgs = {
  input: CouponCodeInput
}

export type MutationCreateCouponTemplateArgs = {
  input: CouponTemplateInput
}

export type MutationCreateCurrencyArgs = {
  input: CurrencyInput
}

export type MutationCreateDriverArgs = {
  input: DriverInput
}

export type MutationCreateGoodArgs = {
  input: GoodInput
}

export type MutationCreateLevelArgs = {
  input: LevelInput
}

export type MutationCreateMachineArgs = {
  input: MachineInput
}

export type MutationCreateMachineGroupArgs = {
  input: MachineGroupInput
}

export type MutationCreateMachineRecipesArgs = {
  machine_id: Scalars['Int']['input']
}

export type MutationCreateMemberArgs = {
  input: MemberInput
}

export type MutationCreateMenuArgs = {
  input: MenuInput
}

export type MutationCreateMerchantArgs = {
  input: MerchantInput
}

export type MutationCreateModelArgs = {
  input: ModelInput
}

export type MutationCreateOrderArgs = {
  input: OrderInput
}

export type MutationCreatePaymentPlatformArgs = {
  input: PaymentPlatformInput
}

export type MutationCreatePermissionArgs = {
  input: PermissionInput
}

export type MutationCreatePermissionTypeArgs = {
  input: PermissionTypeInput
}

export type MutationCreatePickupCodesArgs = {
  input: PickupCodeInput
}

export type MutationCreateProductArgs = {
  machine_id: Scalars['Int']['input']
}

export type MutationCreateProfileArgs = {
  input: UserProfileInput
}

export type MutationCreatePromotionArgs = {
  input: PromotionInput
}

export type MutationCreateRecipeArgs = {
  input: RecipeInput
}

export type MutationCreateRecipeI18NArgs = {
  input: RecipeI18NInput
}

export type MutationCreateRoleArgs = {
  input: RoleInput
}

export type MutationCreateSettingArgs = {
  input: SettingInput
}

export type MutationCreateUnitArgs = {
  input: UnitInput
}

export type MutationDebuggingArgs = {
  input: DebuggingInput
  machine_id: Scalars['Int']['input']
}

export type MutationDeleteAccountArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteAlarmEventArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteAlarmPlatformArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteAnnouncementArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteAppVersionArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteArticleArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteBannerArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteChannelArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteCouponArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteCouponCodeArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteCouponTemplateArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteCurrencyArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteDriverArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteEmployeeArgs = {
  input: EmployeeUserInput
}

export type MutationDeleteGoodArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteLevelArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteMachineArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteMachineGroupArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteMachineLogArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteMachineRecipeArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteMemberArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteMenuArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteMerchantArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteModelArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteNotificationArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteOrderArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeletePaymentPlatformArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeletePermissionArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeletePermissionTypeArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeletePickupCodesArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteProductArgs = {
  ids: Array<Scalars['Int']['input']>
  machine_id: Scalars['Int']['input']
}

export type MutationDeletePromotionArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteRecipeArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteRecipeI18NArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteRoleArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteSettingArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteUnitArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeliverArgs = {
  id: Scalars['Int']['input']
}

export type MutationLoginArgs = {
  input: Scalars['String']['input']
}

export type MutationLoginWithCredentialArgs = {
  input: Scalars['String']['input']
}

export type MutationLogoutArgs = {
  input: Scalars['String']['input']
}

export type MutationLogoutWithCredentialArgs = {
  input: Scalars['String']['input']
}

export type MutationPurgeUserCacheArgs = {
  id: Scalars['Int']['input']
}

export type MutationRebootMachineArgs = {
  machine_id: Scalars['Int']['input']
}

export type MutationRegisterAsEmployeeArgs = {
  input: EmployeeUserInput
}

export type MutationRegisterWithCredentialArgs = {
  input: Scalars['String']['input']
}

export type MutationReplenishProductInventoryArgs = {
  ids: Array<Scalars['Int']['input']>
  machine_id: Scalars['Int']['input']
}

export type MutationResetMerchantSecretArgs = {
  input: Scalars['String']['input']
}

export type MutationSetMachinePowerScheduleArgs = {
  input: PowerScheduleInput
  machine_id: Scalars['Int']['input']
}

export type MutationShutdownMachineArgs = {
  machine_id: Scalars['Int']['input']
}

export type MutationSigninArgs = {
  input: Scalars['String']['input']
}

export type MutationUpdateAccountArgs = {
  id: Scalars['Int']['input']
  input: AccountInput
}

export type MutationUpdateAlarmEventArgs = {
  id: Scalars['Int']['input']
  input: AlarmEventInput
}

export type MutationUpdateAlarmPlatformArgs = {
  id: Scalars['Int']['input']
  input: AlarmPlatformInput
}

export type MutationUpdateAnnouncementArgs = {
  id: Scalars['Int']['input']
  input: AnnouncementInput
}

export type MutationUpdateAppVersionArgs = {
  id: Scalars['Int']['input']
  input: AppVersionInput
}

export type MutationUpdateArticleArgs = {
  id: Scalars['Int']['input']
  input: ArticleInput
}

export type MutationUpdateBannerArgs = {
  id: Scalars['Int']['input']
  input: BannerInput
}

export type MutationUpdateCategoryArgs = {
  id: Scalars['Int']['input']
  input: CategoryInput
}

export type MutationUpdateChannelArgs = {
  id: Scalars['Int']['input']
  input: ChannelInput
}

export type MutationUpdateCouponArgs = {
  id: Scalars['Int']['input']
  input: CouponInput
}

export type MutationUpdateCouponCodeArgs = {
  id: Scalars['Int']['input']
  input: CouponCodeInput
}

export type MutationUpdateCouponTemplateArgs = {
  id: Scalars['Int']['input']
  input: CouponTemplateInput
}

export type MutationUpdateCurrencyArgs = {
  id: Scalars['Int']['input']
  input: CurrencyInput
}

export type MutationUpdateDriverArgs = {
  id: Scalars['Int']['input']
  input: DriverInput
}

export type MutationUpdateEmployeeArgs = {
  input: EmployeeUserInput
}

export type MutationUpdateGoodArgs = {
  id: Scalars['Int']['input']
  input: GoodInput
}

export type MutationUpdateLevelArgs = {
  id: Scalars['Int']['input']
  input: LevelInput
}

export type MutationUpdateMachineArgs = {
  id: Scalars['Int']['input']
  input: MachineInput
}

export type MutationUpdateMachineConfigArgs = {
  input: MachineConfigInput
  machine_id: Scalars['Int']['input']
}

export type MutationUpdateMachineGroupArgs = {
  id: Scalars['Int']['input']
  input: MachineGroupInput
}

export type MutationUpdateMachineRecipeArgs = {
  id: Scalars['Int']['input']
  input: MachineRecipeInput
}

export type MutationUpdateMemberArgs = {
  id: Scalars['Int']['input']
  input: MemberInput
}

export type MutationUpdateMenuArgs = {
  id: Scalars['Int']['input']
  input: MenuInput
}

export type MutationUpdateMerchantArgs = {
  id: Scalars['Int']['input']
  input: MerchantInput
}

export type MutationUpdateMerchantConfigArgs = {
  input: MerchantConfigInput
}

export type MutationUpdateMerchantCurrenciesArgs = {
  ids: Array<Scalars['Int']['input']>
}

export type MutationUpdateMerchantOwnerArgs = {
  input: MerchantOwnerInput
}

export type MutationUpdateModelArgs = {
  id: Scalars['Int']['input']
  input: ModelInput
}

export type MutationUpdateNotificationArgs = {
  id: Scalars['Int']['input']
}

export type MutationUpdatePaymentPlatformArgs = {
  id: Scalars['Int']['input']
  input: PaymentPlatformInput
}

export type MutationUpdatePermissionArgs = {
  id: Scalars['Int']['input']
  input: PermissionInput
}

export type MutationUpdatePermissionTypeArgs = {
  id: Scalars['Int']['input']
  input: PermissionTypeInput
}

export type MutationUpdatePickupCodesArgs = {
  id: Scalars['Int']['input']
  input: PickupCodeInput
}

export type MutationUpdateProductArgs = {
  id: Scalars['Int']['input']
  input: ProductInput
}

export type MutationUpdateProfileArgs = {
  input: UserProfileInput
}

export type MutationUpdatePromotionArgs = {
  id: Scalars['Int']['input']
  input: PromotionInput
}

export type MutationUpdateRecipeArgs = {
  id: Scalars['Int']['input']
  input: RecipeInput
}

export type MutationUpdateRecipeI18NArgs = {
  id: Scalars['Int']['input']
  input: RecipeI18NInput
}

export type MutationUpdateRoleArgs = {
  id: Scalars['Int']['input']
  input: RoleInput
}

export type MutationUpdateRoleMenusArgs = {
  id: Scalars['Int']['input']
  input: RoleMenuObject
}

export type MutationUpdateRolePermissionsArgs = {
  id: Scalars['Int']['input']
  input: Array<Scalars['Int']['input']>
}

export type MutationUpdateSettingArgs = {
  id: Scalars['Int']['input']
  input: SettingInput
}

export type MutationUpdateUnitArgs = {
  id: Scalars['Int']['input']
  input: UnitInput
}

export type MutationUpdateUserAlarmConfigArgs = {
  input: UserAlarmConfigInput
  user_id: Scalars['Int']['input']
}

export type MutationUpdateUserMenusArgs = {
  input: UserMenuInput
}

export type MutationUpdateUserPermissionsArgs = {
  input: UserPermissionInput
}

export type MutationUpdateUserRoleArgs = {
  input: UserRoleInput
}

export type MutationUploadFileArgs = {
  file: Scalars['Upload']['input']
}

export type MutationVerifyAndApplyCouponArgs = {
  input: Scalars['String']['input']
}

export type MutationVerifyAuthCodeArgs = {
  input: Scalars['String']['input']
}

export type MutationVerifyMerchantSecretArgs = {
  input: Scalars['String']['input']
}

export type MutationWechatQrcodeTokenArgs = {
  input: Scalars['String']['input']
}

export type NotificationObject = {
  content: Scalars['String']['output']
  created_at?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  notifiable_id: Scalars['Int']['output']
  read_at?: Maybe<Scalars['String']['output']>
  status: Scalars['Int']['output']
  subject: Scalars['String']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type NotificationPage = {
  currentPage: Scalars['Int']['output']
  data: Array<NotificationObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type OperatorUserObject = {
  id: Scalars['Int']['output']
  username: Scalars['String']['output']
}

export type OrderInput = {
  ip?: InputMaybe<Scalars['String']['input']>
  machine_id: Scalars['Int']['input']
  payment_id?: InputMaybe<Scalars['Int']['input']>
  products: Array<OrderProductInput>
  trade_type?: InputMaybe<Scalars['Int']['input']>
  user_id?: InputMaybe<Scalars['Int']['input']>
}

export type OrderObject = {
  address?: Maybe<Scalars['String']['output']>
  amount: Scalars['String']['output']
  bank_type?: Maybe<Scalars['String']['output']>
  change_cash_amount: Scalars['String']['output']
  coupon_code_id?: Maybe<Scalars['Int']['output']>
  created_at: Scalars['String']['output']
  date: Scalars['String']['output']
  discount_amount: Scalars['String']['output']
  expired_at?: Maybe<Scalars['Int']['output']>
  id: Scalars['Int']['output']
  ip?: Maybe<Scalars['String']['output']>
  is_free: Scalars['Boolean']['output']
  machine_id: Scalars['Int']['output']
  merchant_id: Scalars['Int']['output']
  notify_count: Scalars['Int']['output']
  notify_url?: Maybe<Scalars['String']['output']>
  pay_time?: Maybe<Scalars['String']['output']>
  payment_id: Scalars['Int']['output']
  pickup_code_id?: Maybe<Scalars['Int']['output']>
  records?: Maybe<Array<OrderRecordObject>>
  status: Scalars['String']['output']
  tax_total?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  total_cash_amount: Scalars['String']['output']
  trade_id?: Maybe<Scalars['String']['output']>
  trade_type?: Maybe<Scalars['String']['output']>
  transaction_id?: Maybe<Scalars['String']['output']>
  user_id: Scalars['Int']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type OrderPage = {
  currentPage: Scalars['Int']['output']
  data: Array<OrderObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type OrderProductInput = {
  product_id: Scalars['Int']['input']
  quantity: Scalars['Int']['input']
}

export type OrderRecordObject = {
  delivered_at?: Maybe<Scalars['DateTime']['output']>
  delivery_id?: Maybe<Scalars['String']['output']>
  delivery_logs?: Maybe<Array<DeliveryLogObject>>
  fail_reason?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  notify_sent: Scalars['Boolean']['output']
  pickup_at?: Maybe<Scalars['String']['output']>
  price: Scalars['String']['output']
  product_id: Scalars['Int']['output']
  quantity: Scalars['Int']['output']
  status: Scalars['String']['output']
  tax_amount?: Maybe<Scalars['String']['output']>
}

export type PageInput = {
  current_page?: InputMaybe<Scalars['Int']['input']>
  per_page?: InputMaybe<Scalars['Int']['input']>
}

export type PaymentConfigObject = {
  config: Scalars['String']['output']
  id: Scalars['Int']['output']
  merchant_id: Scalars['Int']['output']
  platform_id: Scalars['Int']['output']
  status: Scalars['Boolean']['output']
}

export type PaymentPlatformInput = {
  description?: InputMaybe<Scalars['String']['input']>
  display_name?: InputMaybe<Scalars['String']['input']>
  is_active?: InputMaybe<Scalars['Boolean']['input']>
  is_visible?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  sort_id?: InputMaybe<Scalars['Int']['input']>
  thumb?: InputMaybe<Scalars['String']['input']>
}

export type PaymentPlatformObject = {
  description: Scalars['String']['output']
  display_name: Scalars['String']['output']
  id: Scalars['Int']['output']
  is_active: Scalars['Boolean']['output']
  is_visible: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  sort_id: Scalars['Int']['output']
  thumb?: Maybe<Scalars['String']['output']>
}

export type PermissionInput = {
  description?: InputMaybe<Scalars['String']['input']>
  display_name?: InputMaybe<Scalars['String']['input']>
  is_premium?: InputMaybe<Scalars['Boolean']['input']>
  is_visible?: InputMaybe<Scalars['Boolean']['input']>
  name: Scalars['String']['input']
  sort_id?: InputMaybe<Scalars['Int']['input']>
  type_id: Scalars['Int']['input']
}

export type PermissionObject = {
  description?: Maybe<Scalars['String']['output']>
  display_name?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  is_premium: Scalars['Boolean']['output']
  is_visible: Scalars['Boolean']['output']
  name: Scalars['String']['output']
  sort_id: Scalars['Int']['output']
  type_id?: Maybe<Scalars['Int']['output']>
}

export type PermissionTypeInput = {
  display_name?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  scope?: InputMaybe<Scalars['Int']['input']>
  sort_id?: InputMaybe<Scalars['Int']['input']>
}

export type PermissionTypeObject = {
  display_name?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
  permissions?: Maybe<Array<PermissionObject>>
  scope: Scalars['Int']['output']
  sort_id: Scalars['Int']['output']
}

export type PickupCodeInput = {
  expired_at?: InputMaybe<Scalars['Int']['input']>
  machine_id: Scalars['Int']['input']
  product_id: Scalars['Int']['input']
  quantity?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['Boolean']['input']>
}

export type PickupCodeObject = {
  code: Scalars['String']['output']
  expired_at?: Maybe<Scalars['Int']['output']>
  expired_day?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  machine_id: Scalars['Int']['output']
  product_id: Scalars['Int']['output']
  quantity: Scalars['Int']['output']
  status: Scalars['Boolean']['output']
}

export type PowerScheduleInput = {
  power_off: Scalars['String']['input']
  power_on: Scalars['String']['input']
  weekdays?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type ProductBatchInput = {
  category_id?: InputMaybe<Scalars['Int']['input']>
  current_inventory?: InputMaybe<Scalars['Int']['input']>
  good_id?: InputMaybe<Scalars['Int']['input']>
  ids: Array<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['Boolean']['input']>
}

export type ProductInput = {
  category_id?: InputMaybe<Scalars['Int']['input']>
  current_inventory?: InputMaybe<Scalars['Int']['input']>
  good_id?: InputMaybe<Scalars['Int']['input']>
  lock_id?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['Boolean']['input']>
}

export type ProductObject = {
  category?: Maybe<CategoryObject>
  category_id?: Maybe<Scalars['Int']['output']>
  channel?: Maybe<ChannelObject>
  channel_id: Scalars['Int']['output']
  current_inventory: Scalars['Int']['output']
  floor_status?: Maybe<Scalars['String']['output']>
  good?: Maybe<GoodObject>
  good_id: Scalars['Int']['output']
  id: Scalars['Int']['output']
  inventory: Scalars['Int']['output']
  lock_id?: Maybe<Scalars['Int']['output']>
  lock_status?: Maybe<Scalars['String']['output']>
  locker?: Maybe<ChannelObject>
  machine_id: Scalars['Int']['output']
  quantity: Scalars['Int']['output']
  status: Scalars['Boolean']['output']
}

export type PromotionInput = {
  is_link: Scalars['Boolean']['input']
  link_url: Scalars['String']['input']
  promotion_type: Scalars['Int']['input']
  thumb: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type PromotionObject = {
  hit_count: Scalars['Int']['output']
  id: Scalars['Int']['output']
  is_link: Scalars['Boolean']['output']
  link_url: Scalars['String']['output']
  promotion_type: Scalars['Int']['output']
  thumb: Scalars['String']['output']
  title: Scalars['String']['output']
  views_count: Scalars['Int']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type PromotionPage = {
  currentPage: Scalars['Int']['output']
  data: Array<PromotionObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type PromotionTypeObject = {
  disabled: Scalars['Boolean']['output']
  display_name: Scalars['String']['output']
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
}

export type Query = {
  /**
   * Retrieves a list of all non-deleted accounts.
   *
   * This asynchronous method fetches all accounts from the database
   * where the `deleted_at` field is `NULL`, indicating that the account
   * has not been deleted. The accounts are then converted into `AccountObject`
   * instances and returned as a vector.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   *
   * # Returns
   *
   * Returns a `Result` containing a vector of `AccountObject`s if successful,
   * or an error if the operation fails.
   */
  accounts: Array<AccountObject>
  /**
   * Retrieves a list of all alarm_events in the database.
   *
   * This asynchronous function returns a vector of `AlarmEventObject` from the
   * `alarm_events` table. If the query fails, an error message is logged and
   * an empty vector is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   *
   * # Returns
   *
   * A `Result` containing a `Vec` of `AlarmEventObject` if the query is successful,
   * or an empty vector if the query fails.
   */
  alarmEvents: Array<AlarmEventObject>
  /**
   * Retrieves a list of all alarm_platforms in the database.
   *
   * # Returns
   *
   * A `Result` containing a `Vec` of `AlarmPlatformObject` if the query is successful,
   * or an error containing the description of the error if the query fails.
   */
  alarmPlatforms: Array<AlarmPlatformObject>
  /**
   * Retrieves the current announcement for the given machine id.
   *
   * This asynchronous function fetches the current announcement from the `announcements` table
   * by the specified `machine_id`. It checks whether the current user has the necessary
   * permissions and whether the user belongs to a merchant before proceeding. If the retrieval
   * is successful, an `AnnouncementObject` is returned. If the user lacks permissions or the
   * retrieval fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `machine_id` - The unique identifier of the machine for which to retrieve the announcement.
   *
   * # Returns
   *
   * A `Result` containing an `AnnouncementObject` if the announcement is retrieved successfully,
   * or an error if the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, or if the retrieval
   * process fails.
   */
  announcement: AnnouncementObject
  /**
   * Get a page of app versions.
   *
   * This method returns a page of app versions from the database.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the pagination information.
   *
   * # Returns
   *
   * A `Result` containing a page of app versions if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  appVersions: AppVersionPage
  /**
   * Retrieves a question by its id from the database.
   *
   * This asynchronous method returns a question by `id` from the
   * `articles` table where `deleted_at` is `NULL`. If the query fails, an error message is logged and the error is
   * returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id to filter the articles by.
   *
   * # Returns
   *
   * A `Result` containing the question if the query is successful, or an error
   * containing the description of the error if the query fails.
   */
  article: ArticleObject
  /**
   * articles
   *
   * This asynchronous function returns a page of `ArticleObject`s representing the list of articles
   * from the `articles` table where `deleted_at` is `NULL`. If a `merchant_id` is provided,
   * the articles are filtered by the given merchant id. The result is limited by
   * the given `limit` and `offset`. If the query fails, an error message is logged and the error
   * is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The pagination input data.
   *
   * # Returns
   *
   * A `Result` containing a page of `ArticleObject`s if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  articles: ArticlePage
  /**
   * Authenticate the user.
   *
   * This function checks if the user is authenticated by attempting to retrieve
   * the `LoggedInUser` data from the GraphQL context. If the data is present, the
   * user is considered authenticated and the function returns `true`. If the data
   * is not present, the function returns `false`.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, which should contain the `LoggedInUser` data
   * if the user is authenticated.
   *
   * # Returns
   *
   * * `Result<bool, Error>` - A result containing `true` if the user is authenticated,
   * `false` otherwise. Returns an error if any unexpected issues occur during the
   * authentication check.
   */
  auth: Scalars['Boolean']['output']
  /**
   * Retrieves a list of banners for the given machine id.
   *
   * This asynchronous function returns a vector of `BannerObject` objects representing the
   * list of banners from the `banners` table for the specified `machine_id`. If the query fails,
   * an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `machine_id` - The machine id to filter the banners by.
   *
   * # Returns
   *
   * A `Result` containing the list of banners if the query is successful, or an error
   * containing the description of the error if the query fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, or if the query fails.
   */
  banners: Array<BannerObject>
  /**
   * Check if a user can access the given URL.
   *
   * This function is supposed to work with the `auth` function above.
   * The `auth` function will check if the user is authenticated,
   * and if the user is authenticated, this function will check if the user
   * has the permission to access the given URL.
   *
   * The URL is expected to be a full URL, e.g. "https://example.com/api/user".
   *
   * The function will return a vector of strings, where each string is the name of
   * a permission that the user has. If the user does not have any permission,
   * an empty vector will be returned.
   */
  canIUse: Array<Scalars['String']['output']>
  /**
   * Retrieves a list of categories from the database.
   *
   * This asynchronous function returns a vector of `CategoryObject` objects representing the
   * list of categories from the `categories` table. If the query fails, an error message is
   * logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `machine_id` - The machine id to filter the categories by.
   *
   * # Returns
   *
   * A `Result` containing the list of categories if the query is successful, or an error
   * containing the description of the error if the query fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, or if the query fails.
   */
  categories: Array<CategoryObject>
  channels: Array<ChannelObject>
  /**
   * Retrieves a list of connection types.
   *
   * This method returns a list of `SelectTypeObject` objects representing the different types of
   * connections that can be used to connect to machines. The response includes the id, name,
   * code, and is_supported fields for each connection type.
   *
   * If the query fails, an error message is logged and the error is returned.
   */
  connectTypes: Array<SelectTypeObject>
  /**
   * Retrieves a page of coupons from the database.
   *
   * This asynchronous function returns a page of coupon objects filtered by the given machine id, status, and pagination information.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the pagination information, machine id, and status.
   *
   * # Returns
   *
   * A `Result` containing a page of coupon objects if the query is successful, or an error containing the description of the error if the query fails.
   */
  coupon: CouponObject
  /**
   * Retrieves a page of coupon codes from the database.
   *
   * This asynchronous function returns a page of coupon code objects filtered by the given coupon id, status, and pagination information.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the pagination information, coupon id, and status.
   *
   * # Returns
   *
   * A `Result` containing a page of coupon code objects if the query is successful, or an error containing the description of the error if the query fails.
   */
  couponCodes: CouponCodePage
  /**
   * Retrieves a list of coupon templates from the database.
   *
   * This asynchronous function returns a list of coupon templates from the `coupon_templates` table
   * where `deleted_at` is `NULL`. If the user is not root, only visible coupon templates are returned.
   *
   * # Returns
   *
   * A `Result` containing a vector of `CouponTemplateObject` if the query is successful, or an error
   * containing the description of the error if the query fails.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, or if the query fails.
   */
  couponTemplates: Array<CouponTemplateObject>
  /**
   * Retrieves a page of coupons from the database.
   *
   * This asynchronous function returns a page of coupon objects filtered by the given machine id, status, and pagination information.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the pagination information, machine id, and status.
   *
   * # Returns
   *
   * A `Result` containing a page of coupon objects if the query is successful, or an error containing the description of the error if the query fails.
   */
  coupons: CouponPage
  /**
   * Retrieves a list of all non-deleted currencies.
   *
   * This asynchronous method fetches all currencies from the database
   * where the `deleted_at` field is `NULL`, indicating that the currency
   * has not been deleted. The currencies are then converted into `CurrencyObject`
   * instances and returned as a vector.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   *
   * # Returns
   *
   * Returns a vector of `CurrencyObject`s if successful,
   * or an empty vector if the operation fails.
   */
  currencies: Array<CurrencyObject>
  /**
   * Gets the current daily sales data for the given merchant and machine ids.
   *
   * This asynchronous function retrieves the current daily sales data for the given merchant and machine ids.
   * If both the merchant id and machine id are not provided, an error message is logged and the error is returned.
   * If the merchant id is provided but the machine id is not, the function queries the daily sales data for all machines under the given merchant.
   * If the machine id is provided but the merchant id is not, the function queries the daily sales data for the given machine.
   * If both the merchant id and machine id are provided, the function queries the daily sales data for the given machine under the given merchant.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `merchant_id` - An optional parameter to filter the daily sales data by the given merchant id.
   * * `machine_ids` - An optional parameter to filter the daily sales data by the given machine ids.
   *
   * # Returns
   *
   * A `Result` containing the current daily sales data if the query is successful,
   * or an error containing the description of the error if the query fails.
   */
  currentDailySales: Array<DailySaleObject>
  /**
   * Get the latest daily sale.
   *
   * This asynchronous function retrieves the latest daily sale from the `daily_sales` table where
   * `merchant_id` is equal to the given `merchant_id` and `machine_id` is equal to the given
   * `machine_id`. If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `merchant_id` - An optional parameter to filter the daily sales by the given merchant id.
   * * `machine_id` - An optional parameter to filter the daily sales by the given machine id.
   *
   * # Returns
   *
   * A `Result` containing the latest daily sale if the query is successful,
   * or an error containing the description of the error if the query fails.
   */
  dailySale: DailySaleObject
  /**
   * Fetches a paginated list of delivery logs.
   *
   * This asynchronous function retrieves delivery logs based on the provided
   * machine ID and pagination input. It checks the current user's permissions
   * to ensure they can access the specified machine. If the user is a root
   * user, all machines are accessible; otherwise, the user can only access their
   * own machines.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context that contains the application state and user
   * information.
   * * `machine_id` - An optional machine ID to filter the delivery logs by the
   * specified machine.
   * * `input` - Pagination input that includes the current page and the number
   * of items per page.
   *
   * # Returns
   *
   * A `Result` containing a `Page<DeliveryLogObject>` with the total count,
   * current page, limit, and list of delivery logs if the query is successful,
   * or an `Error` if the query fails or if the user lacks the necessary
   * permissions.
   */
  deliveryLogs: DeliveryLogPage
  /**
   * Get all drivers.
   *
   * This asynchronous function returns a vector of `DriverObject` containing all
   * the drivers from the `drivers` table. The drivers are ordered by their IDs
   * in descending order and only those entries with `deleted_at` as `NULL` are
   * included. If the query fails, an error message is logged and an empty vector
   * is returned.
   *
   * # Returns
   *
   * A vector of `DriverObject` if the query is successful, or an empty vector
   * if the query fails or no rows are affected.
   */
  drivers: Array<DriverObject>
  /**
   * Retrieves a list of employees for a merchant.
   *
   * This asynchronous function returns a vector of `EmployeeUserObject` representing the list of employees for the specified merchant.
   * The user must have the necessary permissions and the merchant must exist.
   * If the user is not an administrator, it can only query the employees of the merchant that the user belongs to.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `merchant_id` - The optional merchant ID to query. If not provided, the merchant ID of the current user is used.
   *
   * # Returns
   *
   * A `Result` containing the list of employees if the query is successful, or an error containing the description of the error if the query fails or no rows are affected.
   * If the maximum number of staff members for the merchant has been reached, an error is returned.
   */
  employees: Array<EmployeeUserObject>
  /**
   * Retrieves a list of files from the database.
   *
   * This asynchronous function returns a vector of `FileObject` objects representing the
   * list of files from the `files` table where `deleted_at` is `NULL` and `user_id` equals the given `user_id`.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the pagination information.
   *
   * # Returns
   *
   * A `Result` containing the list of files if the query is successful, or an error
   * containing the description of the error if the query fails.
   */
  files: FilePage
  /**
   * Retrieves a list of floor types.
   *
   * This method returns a list of `SelectTypeObject` objects representing the different types of floors.
   * The response includes the id, name, code, and is_supported fields for each floor type.
   *
   * If the query fails, an error message is logged and the error is returned.
   */
  floorTypes: Array<SelectTypeObject>
  /**
   * Verify the auth code of the user.
   *
   * The user must have authenticated previously and the authentication code must exist in Redis.
   * The function will return the authentication code if the user is authenticated and the code exists in Redis,
   * or an error if the user is not authenticated or the code does not exist in Redis.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   *
   * # Returns
   *
   * * `Result<String, Error>` - A result containing the authentication code if the user is authenticated and the code exists in Redis,
   * or an error if the user is not authenticated or the code does not exist in Redis.
   */
  generateAuthCode: Scalars['String']['output']
  /**
   * Get a good by id.
   *
   * This method returns the good by `id`. If the query fails or no rows are affected,
   * an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id to filter the goods by.
   *
   * # Returns
   *
   * A `Result` containing the good if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  good: GoodObject
  /**
   * Get all goods.
   *
   * This method returns all goods that the user's role has access to.
   * If the user's role is "guest", it only returns the goods that are
   * directly under the input menu.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the pagination information.
   *
   * # Returns
   *
   * A `Result` containing a vector of `GoodObject` if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  goods: GoodPage
  /**
   * Retrieves a list of levels from the database.
   *
   * This asynchronous function returns a list of `LevelObject` containing the level, merchant id, name, min points, discount rate, and benefits of each level.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   *
   * # Returns
   *
   * A `Result` containing a list of `LevelObject` if the query is successful, or an error containing
   * the description of the error if the query fails.
   */
  levels: Array<LevelObject>
  /**
   * Retrieves a list of lockers associated with a specific machine.
   *
   * This asynchronous function returns a vector of `ChannelObject` objects representing the
   * list of lockers from the `channels` table. The channels are filtered by `machine_id`
   * and `is_auxiliary` and only those that are not marked as deleted are returned.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `machine_id` - The id of the machine to filter the lockers by.
   *
   * # Returns
   *
   * A `Result` containing the list of lockers if the query is successful, or an error
   * containing the description of the error if the query fails.
   */
  lockers: Array<ChannelObject>
  /**
   * Retrieves a machine by id from the database.
   *
   * This asynchronous function returns the machine by `id` from the
   * `machines` table. If the query fails, an error message is logged and the error is
   * returned.
   *
   * # Arguments
   *
   * * `id` - The id to filter the machines by.
   *
   * # Returns
   *
   * A `Result` containing the machine if the query is successful, or an error
   * containing the description of the error if the query fails.
   */
  machine: MachineObject
  /**
   * Returns a list of machine groups under the current user's merchant.
   *
   * Only available to logged-in users and returns `None` if the user is a guest or root.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   *
   * # Returns
   *
   * A `Result` containing a vector of `MachineGroupObject` if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  machineGroups?: Maybe<Array<MachineGroupObject>>
  /**
   * Retrieves a paginated list of machine logs for a specified machine.
   *
   * This asynchronous function returns a page of `MachineLogObject` items representing
   * the logs associated with the given `machine_id`. The function utilizes pagination
   * parameters provided in the `input` to determine the current page, limit, and offset
   * for fetching logs. If the query is successful, the total count of logs and a list
   * of `MachineLogObject` items are returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `machine_id` - The unique identifier of the machine for which logs are to be retrieved.
   * * `input` - The input parameters containing pagination information such as current page and items per page.
   *
   * # Returns
   *
   * A `Result` containing a `Page` of `MachineLogObject` if the query is successful,
   * or an error if the query fails.
   */
  machineLogs: MachineLogPage
  /**
   * Generates or retrieves the installation password for a machine.
   *
   * This asynchronous function checks if a machine identified by `id` has an installation
   * password. If not, it generates a new installation password and updates the machine's
   * record in the database. This operation requires the current user to have a role other
   * than `ROOT` and to belong to a merchant.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the current user and
   * the application state.
   * * `id` - The unique identifier of the machine for which to retrieve or generate an
   * installation password.
   *
   * # Returns
   *
   * A `Result` containing the installation password as a `String` if successful, or an
   * error if the operation fails or the user lacks the necessary permissions.
   *
   * # Errors
   *
   * Returns an error if the user does not have the required permissions, if the machine
   * cannot be retrieved, or if the update operation fails.
   */
  machinePassword: Scalars['String']['output']
  /**
   * Retrieves a list of machine recipes for a specified machine.
   *
   * This asynchronous function returns a vector of `MachineRecipeObject` objects representing the
   * list of machine recipes associated with the machine identified by `machine_id`. If the query
   * fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `machine_id` - The unique identifier of the machine for which to retrieve the machine recipes.
   *
   * # Returns
   *
   * A `Result` containing the list of machine recipes if the query is successful, or an error
   * containing the description of the error if the query fails.
   *
   * # Errors
   *
   * Returns an error if the machine cannot be retrieved, or if the query fails.
   */
  machineRecipes: Array<MachineRecipeObject>
  /**
   * Retrieves a list of machine types with their corresponding counts for a given merchant id.
   *
   * This asynchronous function returns a vector of `MachineTypeCountObject` objects representing the list of machine types
   * with their corresponding counts for the given merchant id. If the query fails, an error message is logged and
   * an empty vector is returned.
   */
  machineTypeCounts: Array<MachineTypeCountObject>
  /**
   * Retrieves a list of machine types.
   *
   * This method returns a list of `SelectTypeObject` objects representing the different types of machines.
   * The response includes the id, name, code, and is_supported fields for each machine type.
   *
   * If the query fails, an error message is logged and the error is returned.
   */
  machineTypes: Array<SelectTypeObject>
  /**
   * Handles the `/machines` POST request to retrieve a list of machines.
   *
   * This asynchronous function returns a page of `MachineObject` objects representing the
   * list of machines from the `machines` table. If the query fails, an error message is
   * logged and the error is returned.
   *
   * The response includes:
   * - The total number of machines.
   * - The current page number.
   * - The number of machines per page.
   * - A list of machines that are not marked as deleted.
   * - A request ID for tracing purposes.
   *
   * If the merchant is not logged in, an unauthorized response is returned.
   * If the payload is invalid or the sign is incorrect, a bad request response is returned.
   * If the categories are not found or retrieving fails, a bad request response is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, which contains the logged-in user and the request ID.
   * * `input` - JSON payload providing pagination details.
   *
   * # Returns
   *
   * A `Result` containing a `Page` object with the total count of machines, current page,
   * number of machines per page, and the list of machines. If the query fails, an error
   * containing the description of the error is returned.
   */
  machines: MachinePage
  /**
   * Retrieves a page of members from the database.
   *
   * This asynchronous function returns a page of member objects filtered by the given
   * merchant id, machine id, card no, level id, and status. If the query fails, an error
   * message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the pagination information, merchant id, machine id, card no, level id, and status.
   *
   * # Returns
   *
   * A `Result` containing a page of member objects if the query is successful, or an error
   * containing the description of the error if the query fails.
   */
  members: MemberPage
  /**
   * Get all menus.
   *
   * This method returns all menus that the user's role has access to.
   * If the user's role is "guest", it only returns the menus that are
   * directly under the input menu.
   */
  menus: Array<MenuObject>
  /**
   * Get a merchant by id.
   *
   * The user must have the necessary permissions and the merchant must exist.
   * If the user is not an administrator, it can only query the merchant that the user belongs to.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the merchant to query.
   *
   * # Returns
   *
   * A `Result` containing the queried `MerchantObject` if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  merchant: MerchantObject
  /**
   * Get a merchant by invitation code.
   *
   * The user must have the necessary permissions and the merchant must exist.
   * If the user is not an administrator, it can only query the merchant that the user belongs to.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The invitation code of the merchant to query.
   *
   * # Returns
   *
   * A `Result` containing the queried `MerchantObject` if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  merchantInvitationCode: MerchantObject
  /**
   * Get all merchants.
   *
   * This method returns all merchants that the user's role has access to.
   * If the user's role is "guest", it only returns the merchant that the user belongs to.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the pagination information.
   *
   * # Returns
   *
   * A `Result` containing a vector of `MerchantObject` if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  merchants: MerchantPage
  /**
   * Retrieves a model by its unique identifier.
   *
   * This asynchronous function fetches a model from the database using the specified `id`.
   * It checks whether the current user has the necessary permissions to access the model.
   * If the user lacks permissions or if the query fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The unique identifier of the model to retrieve.
   *
   * # Returns
   *
   * A `Result` containing the `ModelObject` if the query is successful, or an error containing
   * the description of the error if the query fails or the user lacks necessary permissions.
   */
  model: ModelObject
  /**
   * Get all models.
   *
   * This method returns all models that the user's role has access to.
   * If the user's role is "guest", it only returns the models that are
   * directly under the input menu.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the pagination information.
   *
   * # Returns
   *
   * A `Result` containing a vector of `ModelObject` if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  models: ModelPage
  /**
   * Retrieves a paginated list of notifications for the current user.
   *
   * This method returns a page of `NotificationObject` items representing the notifications
   * belonging to the current user. The function checks if the current user has the root role,
   * which is required to perform this operation. If the role check fails, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing pagination information such as current page and items per page.
   *
   * # Returns
   *
   * A `Result` containing a `Page` of `NotificationObject` if the query is successful,
   * or an error if the user lacks the required permissions or if the query fails.
   */
  notifications: NotificationPage
  /**
   * Get an order by id.
   *
   * This method returns an order by its unique identifier.
   * If the user's role is "guest", it only returns the orders that are
   * directly under the input machine.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the order to retrieve.
   *
   * # Returns
   *
   * A `Result` containing an `OrderObject` if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  order: OrderObject
  /**
   * Get all orders.
   *
   * This method returns all orders that the user's role has access to.
   * If the user's role is "guest", it only returns the orders that are
   * directly under the input machine.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the pagination information.
   * * `machine_id` - The id of the machine to filter the orders by.
   *
   * # Returns
   *
   * A `Result` containing a vector of `OrderObject` if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  orders: OrderPage
  /**
   * Retrieves a list of payment_configs from the database.
   *
   * This asynchronous function returns a vector of `PaymentConfigObject` objects representing the
   * list of payment_configs from the `payment_configs` table where `deleted_at` is `NULL` and
   * ordered by `id` in descending order. If the query fails, an error message is logged and the
   * error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The optional input string to filter the payment_platforms by.
   *
   * # Returns
   *
   * A `Result` containing the list of payment_configs if the query is successful, or an error
   * containing the description of the error if the query fails.
   */
  paymentConfigs: Array<PaymentConfigObject>
  /**
   * Retrieves a list of payment_platforms from the database.
   *
   * This asynchronous function returns a vector of `PaymentPlatformObject` objects representing the
   * list of payment_platforms from the `payment_platforms` table. If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The optional input string to filter the payment_platforms by.
   *
   * # Returns
   *
   * A `Result` containing the list of payment_platforms if the query is successful, or an error
   * containing the description of the error if the query fails.
   */
  paymentPlatforms: Array<PaymentPlatformObject>
  /**
   * Retrieve a list of permission types from the database, with their associated permissions.
   *
   * This asynchronous function returns a vector of `PermissionTypeObject` objects, each containing
   * a list of associated `PermissionObject` objects. The data is fetched from the `permission_types`
   * table, with permissions being aggregated in JSON format from the `permissions` table. Both
   * tables are filtered to exclude entries marked as deleted. If the query fails, an error
   * message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The context object containing the current request.
   * * `input` - An optional vector of scopes to filter the permission types by.
   *
   * # Returns
   *
   * A `Result` containing a vector of `PermissionTypeObject` objects if the query is successful,
   * or an error containing the description of the error if the query fails.
   */
  permissionTypes: Array<PermissionTypeObject>
  /**
   * Retrieves a list of all permissions from the database.
   *
   * # Returns
   *
   * A `Result` containing a vector of `PermissionObject` instances on success, or an `Error` on failure.
   *
   * The permissions are ordered by `sort_id` in ascending order, and only permissions that have not
   * been soft-deleted are included in the result.
   */
  permissions: Array<PermissionObject>
  /**
   * Retrieves a list of pickup codes for a given `machine_id` from the database.
   *
   * This asynchronous function takes a `machine_id` and returns a vector of `PickupCodeObject` objects
   * representing the list of pickup codes from the `pickup_codes` table where `deleted_at` is `NULL`
   * and `machine_id` is equal to the given `machine_id`. If the query fails, an error message is
   * logged and the error is returned.
   *
   * # Arguments
   *
   * * `machine_id` - The machine id to filter the pickup codes by.
   *
   * # Returns
   *
   * A `Result` containing the list of pickup codes if the query is successful, or an error
   * containing the description of the error if the query fails.
   */
  pickupCodes: Array<PickupCodeObject>
  /**
   * Retrieves a list of platform types.
   *
   * This method returns a list of `SelectTypeObject` objects representing the different types of platforms.
   * The response includes the id, name, code, and is_supported fields for each platform type.
   *
   * If the query fails, an error message is logged and the error is returned.
   */
  platformTypes: Array<SelectTypeObject>
  /**
   * Handles the `/products` POST request to retrieve a list of products.
   *
   * This asynchronous function takes a JSON payload containing a machine id and an optional address.
   * The function decrypts the payload, verifies the machine id and address are valid, and then
   * queries the database to retrieve a list of products associated with the machine id and address.
   * The function returns a list of `ProductObject` objects, each containing the product's id, name,
   * description, price, original price, thumbnail, media, content, and slug.
   *
   * If the payload is invalid or the sign is incorrect, a bad request response is returned.
   * If the query fails, an error message is logged and the error is returned.
   */
  products: Array<ProductObject>
  /**
   * Retrieve the current user's profile.
   *
   * This function retrieves the user's profile, including their permissions.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, which should contain the `LoggedInUser` data
   * if the user is authenticated.
   *
   * # Returns
   *
   * * `Result<UserObject, Error>` - A result containing the user's profile, or an error
   * if any unexpected issues occur during the retrieval.
   */
  profile: UserObject
  /**
   * Retrieves all promotion types.
   *
   * This asynchronous function returns a vector of `PromotionTypeObject` containing
   * all promotion types. The function does not check permissions and does not
   * require any input parameters.
   *
   * # Returns
   *
   * A `Result` containing a vector of `PromotionTypeObject` if the query is successful,
   * or an error containing the description of the error if the query fails.
   */
  promotionTypes: Array<PromotionTypeObject>
  /**
   * Get all promotions.
   *
   * This method returns a page of promotion objects filtered by the given promotion type.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `promotion_type` - The id of the promotion type to filter the promotions by.
   * * `input` - The input parameters containing the pagination information.
   *
   * # Returns
   *
   * A `Result` containing a page of promotion objects if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  promotions: PromotionPage
  /**
   * Get a recipe by its id.
   *
   * This method returns a recipe by its id.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `id` - The id of the recipe to be retrieved.
   *
   * # Returns
   *
   * A `Result` containing the recipe if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  recipe: RecipeObject
  /**
   * Get all recipes.
   *
   * This method returns all recipes that the user's role has access to.
   * If the user's role is "guest", it only returns the recipes that are
   * directly under the input menu.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the pagination information.
   *
   * # Returns
   *
   * A `Result` containing a vector of `RecipeObject` if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  recipes: RecipePage
  /**
   * Get all restocks for the given machine id.
   *
   * This asynchronous function returns a list of restocks for the given machine id.
   * If the user's role is not "guest", it only returns the restocks that are
   * directly under the input machine.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `machine_id` - The machine id to filter the restocks by.
   * * `input` - The input parameters containing the pagination information.
   *
   * # Returns
   *
   * A `Result` containing a vector of `RestockObject` if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  restocks: RestockPage
  /**
   * Get the list of all roles.
   *
   * This asynchronous function returns the list of all roles in the `roles` table
   * where `deleted_at` is `NULL`. The list is sorted by the `sort_id` field.
   * If the query fails, an error message is logged and returned.
   *
   * # Returns
   *
   * A `Result` containing a vector of `RoleObject` if the query is successful, or an error
   * containing the description of the error if the query fails.
   */
  roles: Array<RoleObject>
  setting: SettingObject
  /**
   * Retrieves a list of units from the database.
   *
   * This asynchronous function returns a vector of `UnitObject` objects representing
   * the list of units associated with the given `merchant_id` from the `units`
   * table. If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `merchant_id` - The id of the merchant whose units are to be retrieved.
   *
   * # Returns
   *
   * A `Result` containing the list of units if the query is successful, or an error
   * containing the description of the error if the query fails.
   */
  units: Array<UnitObject>
  /**
   * Checks if there is an update available for the given version.
   *
   * If the version is not provided, it returns `None`.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The version to check for updates. If `None`, it returns `None`.
   *
   * # Returns
   *
   * A `Result` containing an `Option<AppVersionObject>` with the latest version if an update is available, or `None` if no update is available or if the version is not provided.
   */
  upgrade?: Maybe<AppVersionObject>
  /**
   * Get the user logs of the current user.
   *
   * This method returns a page of user logs of the current user.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the pagination information.
   *
   * # Returns
   *
   * A `Result` containing a page of user logs if the query is successful,
   * or an error containing the description of the error if the query fails or no rows are affected.
   */
  userLogs: UserLogPage
  /**
   * Get the user menus.
   *
   * This method returns a vector of `UserMenuObject` containing the menus associated with the user.
   *
   * If the current user lacks the necessary permissions, an error is returned.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - The input parameters containing the user id to filter the menus by.
   *
   * # Returns
   *
   * A `Result` containing a vector of `UserMenuObject` if the query is successful,
   * or an error containing the description of the error if the query fails or the user lacks
   * the necessary permissions.
   */
  userMenus: Array<UserMenuObject>
  /**
   * Lists the permissions associated with a user.
   *
   * This asynchronous function returns a vector of `UserPermissionObject` objects,
   * each containing the details of a permission associated with the specified user.
   * The current user must have the necessary permissions to call this function.
   * If the current user lacks the necessary permissions, an error is returned.
   * If the query fails, an error message is logged and the error is returned.
   *
   * # Arguments
   *
   * * `ctx` - A reference to the GraphQL context, containing the `AppState` and `LoggedInUser`.
   * * `input` - A `UserPermissionInput` object containing the user id to filter the permissions by.
   *
   * # Returns
   *
   * A `Result` containing a vector of `UserPermissionObject` if the query is successful, or an error
   * containing the description of the error if the query fails or the user lacks the necessary permissions.
   */
  userPermissions: Array<UserPermissionObject>
  /**
   * Retrieve a list of users, optionally paginated.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context, which should contain the `AppState` data.
   * * `input` - An optional `PageInput` object containing pagination data.
   *
   * # Returns
   *
   * * `Result<Page<UserObject>, Error>` - A result containing a `Page` of `UserObject`s, or an error if any unexpected issues occur during the retrieval.
   */
  users: UserPage
  /**
   * Generates a QR code for a user to log in.
   *
   * This asynchronous function takes a signed input and verifies it. The function
   * then checks if the platform type of the account is an official account, and
   * if so, it generates a QR code ticket for the user and stores the ticket in
   * Redis with a key that is a concatenation of the prefix and a UUID.
   *
   * # Arguments
   *
   * * `ctx` - The GraphQL context containing shared data, including the application state.
   * * `input` - A `String` containing the signed input to verify.
   *
   * # Returns
   *
   * A `Result` containing a `WechatQrcodeObject` if the function is successful,
   * or an `Error` if the operation fails.
   */
  wechatLoginQrcode: WechatQrcodeObject
}

export type QueryAnnouncementArgs = {
  machine_id: Scalars['Int']['input']
}

export type QueryAppVersionsArgs = {
  input: PageInput
}

export type QueryArticleArgs = {
  id: Scalars['Int']['input']
}

export type QueryArticlesArgs = {
  input: PageInput
}

export type QueryBannersArgs = {
  machine_id: Scalars['Int']['input']
  view_type?: InputMaybe<Scalars['Int']['input']>
}

export type QueryCanIUseArgs = {
  input: Scalars['String']['input']
}

export type QueryCategoriesArgs = {
  machine_id: Scalars['Int']['input']
}

export type QueryChannelsArgs = {
  addr?: InputMaybe<Scalars['Int']['input']>
  model_id: Scalars['Int']['input']
}

export type QueryCouponArgs = {
  id: Scalars['Int']['input']
}

export type QueryCouponCodesArgs = {
  input: CouponCodesQueryInput
}

export type QueryCouponsArgs = {
  input: CouponsQueryInput
}

export type QueryCurrentDailySalesArgs = {
  machine_ids?: InputMaybe<Array<Scalars['Int']['input']>>
  merchant_id?: InputMaybe<Scalars['Int']['input']>
}

export type QueryDailySaleArgs = {
  machine_id?: InputMaybe<Scalars['Int']['input']>
  merchant_id?: InputMaybe<Scalars['Int']['input']>
}

export type QueryDeliveryLogsArgs = {
  input: PageInput
  machine_id?: InputMaybe<Scalars['Int']['input']>
}

export type QueryEmployeesArgs = {
  merchant_id?: InputMaybe<Scalars['Int']['input']>
}

export type QueryFilesArgs = {
  group_id?: InputMaybe<Scalars['Int']['input']>
  input: FilesQueryInput
}

export type QueryGoodArgs = {
  id: Scalars['Int']['input']
}

export type QueryGoodsArgs = {
  input: PageInput
}

export type QueryLockersArgs = {
  addr?: InputMaybe<Scalars['Int']['input']>
  machine_id: Scalars['Int']['input']
}

export type QueryMachineArgs = {
  id: Scalars['Int']['input']
}

export type QueryMachineLogsArgs = {
  input: PageInput
  machine_id: Scalars['Int']['input']
}

export type QueryMachinePasswordArgs = {
  id: Scalars['Int']['input']
}

export type QueryMachineRecipesArgs = {
  machine_id: Scalars['Int']['input']
}

export type QueryMachinesArgs = {
  input: MachinesQueryInput
}

export type QueryMembersArgs = {
  input: MembersQueryInput
}

export type QueryMenusArgs = {
  input: Scalars['String']['input']
}

export type QueryMerchantArgs = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type QueryMerchantInvitationCodeArgs = {
  input: Scalars['String']['input']
}

export type QueryMerchantsArgs = {
  input: PageInput
}

export type QueryModelArgs = {
  id: Scalars['Int']['input']
}

export type QueryModelsArgs = {
  input: PageInput
}

export type QueryNotificationsArgs = {
  input: PageInput
}

export type QueryOrderArgs = {
  id: Scalars['Int']['input']
  input?: InputMaybe<Scalars['String']['input']>
}

export type QueryOrdersArgs = {
  input: PageInput
  machine_id?: InputMaybe<Scalars['Int']['input']>
}

export type QueryPaymentConfigsArgs = {
  input?: InputMaybe<Scalars['String']['input']>
}

export type QueryPaymentPlatformsArgs = {
  input?: InputMaybe<Scalars['String']['input']>
}

export type QueryPermissionTypesArgs = {
  input?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type QueryPickupCodesArgs = {
  machine_id: Scalars['Int']['input']
}

export type QueryProductsArgs = {
  input: Scalars['String']['input']
}

export type QueryPromotionsArgs = {
  input: PageInput
  promotion_type?: InputMaybe<Scalars['Int']['input']>
}

export type QueryRecipeArgs = {
  id: Scalars['Int']['input']
}

export type QueryRecipesArgs = {
  input: PageInput
  machine_id?: InputMaybe<Scalars['Int']['input']>
}

export type QueryRestocksArgs = {
  input: PageInput
  machine_id?: InputMaybe<Scalars['Int']['input']>
}

export type QueryRolesArgs = {
  input?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type QuerySettingArgs = {
  input?: InputMaybe<Scalars['String']['input']>
}

export type QueryUpgradeArgs = {
  input?: InputMaybe<Scalars['String']['input']>
}

export type QueryUserLogsArgs = {
  input: PageInput
}

export type QueryUserMenusArgs = {
  input: UserMenuInput
}

export type QueryUserPermissionsArgs = {
  input: UserPermissionInput
}

export type QueryUsersArgs = {
  input: UsersQueryInput
}

export type QueryWechatLoginQrcodeArgs = {
  input: Scalars['String']['input']
}

export type RecipeI18NInput = {
  description: Scalars['String']['input']
  lng: Scalars['String']['input']
  name: Scalars['String']['input']
  recipe_id: Scalars['Int']['input']
}

export type RecipeI18NObject = {
  description: Scalars['String']['output']
  id: Scalars['Int']['output']
  lng: Scalars['String']['output']
  name: Scalars['String']['output']
  recipe_id: Scalars['Int']['output']
}

export type RecipeInput = {
  description?: InputMaybe<Scalars['String']['input']>
  heat_time?: InputMaybe<Scalars['Int']['input']>
  is_visible?: InputMaybe<Scalars['Boolean']['input']>
  media?: InputMaybe<Array<Scalars['String']['input']>>
  name?: InputMaybe<Scalars['String']['input']>
  temperature?: InputMaybe<Scalars['Int']['input']>
  thumb?: InputMaybe<Scalars['String']['input']>
  type_id?: InputMaybe<Scalars['Int']['input']>
  water_time?: InputMaybe<Scalars['Int']['input']>
  water_volume?: InputMaybe<Scalars['Int']['input']>
}

export type RecipeObject = {
  description: Scalars['String']['output']
  disabled?: Maybe<Scalars['Boolean']['output']>
  heat_time: Scalars['Int']['output']
  id: Scalars['Int']['output']
  is_visible: Scalars['Boolean']['output']
  languages?: Maybe<Array<RecipeI18NObject>>
  media: Array<Scalars['String']['output']>
  name: Scalars['String']['output']
  temperature: Scalars['Int']['output']
  thumb: Scalars['String']['output']
  type_id: Scalars['Int']['output']
  water_time: Scalars['Int']['output']
  water_volume: Scalars['Int']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type RecipePage = {
  currentPage: Scalars['Int']['output']
  data: Array<RecipeObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type RestockObject = {
  addr: Scalars['Int']['output']
  code: Scalars['String']['output']
  created_at: Scalars['String']['output']
  current_inventory: Scalars['Int']['output']
  description: Scalars['String']['output']
  id: Scalars['Int']['output']
  machine_id: Scalars['Int']['output']
  merchant_id: Scalars['Int']['output']
  operator?: Maybe<OperatorUserObject>
  prev_inventory: Scalars['Int']['output']
  source_type: Scalars['String']['output']
  transaction_type: Scalars['String']['output']
  user_id: Scalars['Int']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type RestockPage = {
  currentPage: Scalars['Int']['output']
  data: Array<RestockObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type RoleInput = {
  description?: InputMaybe<Scalars['String']['input']>
  display_name?: InputMaybe<Scalars['String']['input']>
  is_visible?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  scope?: InputMaybe<Scalars['Int']['input']>
  sort_id?: InputMaybe<Scalars['Int']['input']>
}

export type RoleMenuInput = {
  indeterminate_keys?: Maybe<Array<Scalars['Int']['output']>>
  selected_keys?: Maybe<Array<Scalars['Int']['output']>>
}

export type RoleMenuObject = {
  indeterminate_keys?: InputMaybe<Array<Scalars['Int']['input']>>
  selected_keys?: InputMaybe<Array<Scalars['Int']['input']>>
}

export type RoleObject = {
  description?: Maybe<Scalars['String']['output']>
  display_name?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  is_visible: Scalars['Boolean']['output']
  menu_ids?: Maybe<RoleMenuInput>
  name: Scalars['String']['output']
  permission_ids?: Maybe<Array<Scalars['Int']['output']>>
  scope: Scalars['Int']['output']
  sort_id: Scalars['Int']['output']
}

export type SelectTypeObject = {
  disabled: Scalars['Boolean']['output']
  display_name: Scalars['String']['output']
  id: Scalars['Int']['output']
  name: Scalars['String']['output']
}

export type SettingInput = {
  description?: InputMaybe<Scalars['String']['input']>
  email_enabled?: InputMaybe<Scalars['Boolean']['input']>
  email_from_address?: InputMaybe<Scalars['String']['input']>
  email_host?: InputMaybe<Scalars['String']['input']>
  email_password?: InputMaybe<Scalars['String']['input']>
  email_port?: InputMaybe<Scalars['Int']['input']>
  email_username?: InputMaybe<Scalars['String']['input']>
  file_group_id?: InputMaybe<Scalars['Int']['input']>
  host?: InputMaybe<Scalars['String']['input']>
  is_maintenance: Scalars['Boolean']['input']
  keywords?: InputMaybe<Scalars['String']['input']>
  mosquitto_jwt_secret?: InputMaybe<Scalars['String']['input']>
  registrable: Scalars['Boolean']['input']
  resumed_at?: InputMaybe<Scalars['Int']['input']>
  title: Scalars['String']['input']
}

export type SettingObject = {
  description?: Maybe<Scalars['String']['output']>
  email_enabled: Scalars['Boolean']['output']
  email_from_address?: Maybe<Scalars['String']['output']>
  email_host?: Maybe<Scalars['String']['output']>
  email_password?: Maybe<Scalars['String']['output']>
  email_port?: Maybe<Scalars['Int']['output']>
  email_username?: Maybe<Scalars['String']['output']>
  file_group_id: Scalars['Int']['output']
  folder: Scalars['String']['output']
  host: Scalars['String']['output']
  id: Scalars['Int']['output']
  is_maintenance: Scalars['Boolean']['output']
  keywords?: Maybe<Scalars['String']['output']>
  mosquitto_jwt_secret?: Maybe<Scalars['String']['output']>
  registrable: Scalars['Boolean']['output']
  resumed_at?: Maybe<Scalars['Int']['output']>
  title: Scalars['String']['output']
  token?: Maybe<Scalars['String']['output']>
}

export type UnitInput = {
  base_unit: Scalars['String']['input']
  description: Scalars['String']['input']
  display_name: Scalars['String']['input']
  multiplier: Scalars['Float']['input']
  name: Scalars['String']['input']
}

export type UnitObject = {
  base_unit: Scalars['String']['output']
  description: Scalars['String']['output']
  display_name: Scalars['String']['output']
  id: Scalars['Int']['output']
  immutable: Scalars['Boolean']['output']
  multiplier: Scalars['Float']['output']
  name: Scalars['String']['output']
}

export type UserAlarmConfigInput = {
  alarm_event_ids?: InputMaybe<Array<Scalars['Int']['input']>>
  alarm_platform_id: Scalars['Int']['input']
}

export type UserAlarmConfigObject = {
  alarm_event_ids?: Maybe<Array<Scalars['Int']['output']>>
  alarm_platform_id: Scalars['Int']['output']
  id: Scalars['Int']['output']
}

export type UserLogObject = {
  city: Scalars['String']['output']
  country: Scalars['String']['output']
  id: Scalars['Int']['output']
  ip: Scalars['String']['output']
  login_at?: Maybe<Scalars['String']['output']>
  login_type: Scalars['String']['output']
  logout_at?: Maybe<Scalars['String']['output']>
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type UserLogPage = {
  currentPage: Scalars['Int']['output']
  data: Array<UserLogObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type UserMenuInput = {
  menu_ids?: InputMaybe<Array<Scalars['Int']['input']>>
  user_id: Scalars['Int']['input']
}

export type UserMenuObject = {
  action?: Maybe<Scalars['Int']['output']>
  expired_at?: Maybe<Scalars['Int']['output']>
  id: Scalars['Int']['output']
  menu_id: Scalars['Int']['output']
}

export type UserObject = {
  email: Scalars['String']['output']
  email_verified_at?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  is_readonly: Scalars['Boolean']['output']
  merchant?: Maybe<MerchantUserObject>
  permissions?: Maybe<Array<Scalars['String']['output']>>
  profile_url: Scalars['String']['output']
  role?: Maybe<RoleObject>
  status: Scalars['Int']['output']
  username: Scalars['String']['output']
}

/** [Page Object](https://async-graphql.github.io/async-graphql/zh-CN/define_simple_object.html?highlight=ComplexObject#%E6%B3%9B%E5%9E%8B) */
export type UserPage = {
  currentPage: Scalars['Int']['output']
  data: Array<UserObject>
  lastPage: Scalars['Int']['output']
  perPage: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type UserPermissionInput = {
  permission_ids?: InputMaybe<Array<Scalars['Int']['input']>>
  user_id: Scalars['Int']['input']
}

export type UserPermissionObject = {
  action?: Maybe<Scalars['Int']['output']>
  expired_at?: Maybe<Scalars['Int']['output']>
  id: Scalars['Int']['output']
  permission_id: Scalars['Int']['output']
}

export type UserProfileInput = {
  create_merchant?: InputMaybe<Scalars['Boolean']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  profile_url?: InputMaybe<Scalars['String']['input']>
  tel?: InputMaybe<Scalars['String']['input']>
  username?: InputMaybe<Scalars['String']['input']>
}

export type UserRoleInput = {
  password?: InputMaybe<Scalars['String']['input']>
  role_id: Scalars['Int']['input']
  status?: InputMaybe<Scalars['Int']['input']>
  user_id: Scalars['Int']['input']
}

export type UsersQueryInput = {
  current_page?: InputMaybe<Scalars['Int']['input']>
  per_page?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<Scalars['Int']['input']>
}

export type WechatQrcodeObject = {
  duration: Scalars['Int']['output']
  key: Scalars['String']['output']
  url: Scalars['String']['output']
}

export type SigninMutationVariables = Exact<{
  input: Scalars['String']['input']
}>

export type SigninMutation = { signin: string }

export type LoginMutationVariables = Exact<{
  input: Scalars['String']['input']
}>

export type LoginMutation = { login: string }

export type LogoutMutationVariables = Exact<{
  input: Scalars['String']['input']
}>

export type LogoutMutation = { logout: string }

export type UploadFileMutationVariables = Exact<{
  file: Scalars['Upload']['input']
}>

export type UploadFileMutation = {
  uploadFile: {
    id: number
    file_url?: string | null
    user_id: number
    file_name?: string | null
    file_size?: number | null
    file_type?: string | null
    file_extension?: string | null
    group_id: number
    is_referenced: boolean
  }
}

export type CanIUseQueryVariables = Exact<{
  input: Scalars['String']['input']
}>

export type CanIUseQuery = { canIUse: Array<string> }

export type AuthQueryVariables = Exact<{ [key: string]: never }>

export type AuthQuery = { auth: boolean }

export type ProfileQueryVariables = Exact<{ [key: string]: never }>

export type ProfileQuery = {
  profile: {
    id: number
    email: string
    username: string
    profile_url: string
    status: number
    email_verified_at?: string | null
    permissions?: Array<string> | null
    role?: { id: number; name: string; display_name?: string | null } | null
  }
}

export const SigninDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Signin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'signin' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SigninMutation, SigninMutationVariables>
export const LoginDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Login' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'login' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>
export const LogoutDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'Logout' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'logout' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>
export const UploadFileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UploadFile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'file' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Upload' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'uploadFile' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'file' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'file' } },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'file_url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'user_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'file_name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'file_size' } },
                { kind: 'Field', name: { kind: 'Name', value: 'file_type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'file_extension' } },
                { kind: 'Field', name: { kind: 'Name', value: 'group_id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'is_referenced' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UploadFileMutation, UploadFileMutationVariables>
export const CanIUseDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CanIUse' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'canIUse' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'input' } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CanIUseQuery, CanIUseQueryVariables>
export const AuthDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Auth' },
      selectionSet: { kind: 'SelectionSet', selections: [{ kind: 'Field', name: { kind: 'Name', value: 'auth' } }] },
    },
  ],
} as unknown as DocumentNode<AuthQuery, AuthQueryVariables>
export const ProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Profile' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'profile' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
                { kind: 'Field', name: { kind: 'Name', value: 'profile_url' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email_verified_at' } },
                { kind: 'Field', name: { kind: 'Name', value: 'permissions' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'role' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'display_name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProfileQuery, ProfileQueryVariables>
