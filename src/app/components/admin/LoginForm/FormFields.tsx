interface FormFieldsProps {
  username: string;
  password: string;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
}

export const FormFields = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
}: FormFieldsProps) => {
  return (
    <div className="rounded-md shadow-sm -space-y-px">
      <div>
        <label htmlFor="username" className="sr-only">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#00295c] focus:border-[#00295c] focus:z-10 sm:text-sm"
          placeholder="Username"
          value={username}
          onChange={(e) => onUsernameChange(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#00295c] focus:border-[#00295c] focus:z-10 sm:text-sm"
          placeholder="Password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
        />
      </div>
    </div>
  );
};
