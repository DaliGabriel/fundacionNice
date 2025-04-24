export interface Numbers {
  id: number;
  number: string;
  description: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
}

export interface UseNumbersReturn {
  numbers: Numbers[];
  error: string | null;
  refetchNumbers: () => Promise<void>;
  editingNumber?: Numbers | null;
  setEditingNumber?: (number: Numbers | null) => void;
  updateNumber?: (id: number, data: Partial<Numbers>) => Promise<void>;
  isLoading: boolean;
}

export interface UseAdminNumbersReturn {
  numbers: Numbers[];
  error: string | null;
  refetchNumbers: () => Promise<void>;
  editingNumber?: Numbers | null;
  setEditingNumber?: (number: Numbers | null) => void;
  updateNumber?: (id: number, data: Partial<Numbers>) => Promise<void>;
  isLoading: boolean;
}
