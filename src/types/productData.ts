import type { ReactNode } from 'react';

export interface ProductBase {
  nameProducts: string;
  nameProduct?: ReactNode;
  nameProductPages?: string;
  src?: string;
  alt: string;
  articul: string;
  price: number;
  weight: string[];
  basket: string;
  description: string;
  productPagesSrc?: string;
  detailedDescription?: ReactNode;
  additionalInformationWan?: string;
  additionalInformationTwo?: string;
  additionalInformationSrcWan?: [string, string][];
  additionalInformationSrcTwo?: [string, ReactNode][];
}


export interface BirdInfoPage {
  nameProducts: string;
  nameProductPages?: string;
  productPagesSrc?: string;
  alt: string;
  price: number;
  weight?: string[]|undefined;
  detailedDescription?: ReactNode;
  additionalInformationWan?: string;
  additionalInformationTwo?: string;
  additionalInformationSrcWan?: [string, string][];
  additionalInformationSrcTwo?: [string, ReactNode][];
}