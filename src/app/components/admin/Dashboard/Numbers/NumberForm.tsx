import { useState, useEffect } from "react";
import { Numbers } from "@/lib/types/numbers";

interface NumberFormProps {
  onSubmit: (data: Partial<Numbers>) => Promise<void>;
  initialData?: Numbers;
  onClose: () => void;
}

export const NumberForm = ({
  onSubmit,
  initialData,
  onClose,
}: NumberFormProps) => {
  const [formData, setFormData] = useState<Partial<Numbers>>({
    icon: "",
    number: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setFormData({
        icon: initialData.icon,
        number: initialData.number,
        description: initialData.description,
      });
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await onSubmit(formData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save number");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-2 text-sm text-red-600 bg-red-50 rounded">
          {error}
        </div>
      )}

      <div>
        <label
          htmlFor="icon"
          className="block text-sm font-medium text-gray-700"
        >
          Icon Path
        </label>
        <input
          type="text"
          id="icon"
          value={formData.icon}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, icon: e.target.value }))
          }
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="number"
          className="block text-sm font-medium text-gray-700"
        >
          Number
        </label>
        <input
          type="text"
          id="number"
          value={formData.number}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, number: e.target.value }))
          }
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, description: e.target.value }))
          }
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
};
