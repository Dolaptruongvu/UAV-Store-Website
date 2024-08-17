import React,{Children, createContext,useEffect, useState, ReactNode} from "react";
import axiosInstance from "../../utilities/axiousEdition";

interface AuthContextType {
  customer: any; 
}

const defaultContextValue: AuthContextType = {
  customer: null,
};
export const AuthContext = createContext<AuthContextType>(defaultContextValue);


// Define the props type for AuthProvider
interface AuthProviderProps {
  children: ReactNode; // Use ReactNode for children
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [customer, setCustomer] = useState<any>(null); // Replace 'any' with the actual type if available

  useEffect(() => {
  const checkAuth = async () => {
    console.log("Checking authentication..."); // Debug log
    try {
      const response = await axiosInstance.get('/customer/me');
      console.log("API response:", response.data); // Debug log
      if (response.data.status === 'success') {
        setCustomer(response.data.data.customer);
        console.log("Customer set in context:", response.data.data.customer);
      } else {
        console.log("API response status is not success.");
      }
    } catch (err) {
      console.log("API call error:", err); // Debug log
    }
  };

  checkAuth(); // Don't forget to call the function
}, []);



  return (
    <AuthContext.Provider value={{ customer }}>
      {children} {/* Ensure the children prop is rendered */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;