import React from 'react';

export interface Author {
  name: string;
  url?: string;
}

export interface LinkButton {
  label: string;
  icon: React.ReactNode;
  url: string;
  disabled?: boolean;
}