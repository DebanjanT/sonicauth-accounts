import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import sonicLogo from "../../../../public/images/sonic.png";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { ClientProps, ClientStateProps, UserProps } from "@/types/login.types";

const Oauthv1 = () => {
  const searchParams = useSearchParams();
  const clientId = searchParams.get("client_id");
  const callback = searchParams.get("callback");

  const [userLoginCreds, setUserLoginCreds] = useState({
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");

  const [client, setClient] = useState<ClientProps>({
    clientId: "",
    // Parent Domain Callback
    pdc: "",
    active: false,
    // Child Domain Callback
    cdc: "",
    requestId: "",
    meta: {
      createdAt: "",
      updatedAt: "",
      hasApiCallQuota: false,
    },
  });

  const [clientStates, setClientStates] = useState<ClientStateProps>({
    isLoading: false,
    hasError: false,
    error: {},
    isSuccess: false,
  });
  const [userStates, setUserStates] = useState<ClientStateProps>({
    isLoading: false,
    hasError: false,
    error: {},
    isSuccess: false,
  });

  const [user, setUser] = useState<UserProps>({
    data: {},
    hasError: false,
    error: {},
    TFA: false,
  });

  const [otp, setOtp] = useState("");

  const [disabled, setDisabled] = useState(false);

  const getClientIdStatus = async () => {
    if (!clientId || !callback) return false;
  };

  return (
    <div className="w-full sm:flex sm:justify-center sm:items-center min-h-screen   sm:pt-3">
      <div className="flex flex-col sm:shadow-md sm:shadow-gray-200 sm:bg-white bg-gray-50 justify-center w-full mx-auto max-w-lg sm:border  text-[14px] rounded-lg border-slate-300 ">
        <div className="px-2 py-1 border-b border-b-slate-300 flex justify-start items-center gap-1">
          <img src={sonicLogo.src} className="w-6 h-6" />
          <p className="text-slate-600">Sign in with Sonic</p>
        </div>
        {(clientStates.isLoading || userStates.isLoading) && (
          <div className="w-full">
            <div className="h-1.5 w-full bg-surfaceMixed600/50 overflow-hidden">
              <div className="animate-progress w-full h-full bg-surfaceMixed100 origin-left-right"></div>
            </div>
          </div>
        )}
        {clientId && callback ? (
          <>
            <div className="mt-10 mb-4 flex flex-col justify-center items-center w-full">
              <p className="font-medium text-slate-700 text-lg tracking-wide">
                Login Account
              </p>
              <p>
                to continue to{" "}
                <span className="text-complementaryDarker hover:underline cursor-pointer">
                  aoe2.sonicesports.com
                </span>
              </p>
            </div>

            {/* Error div */}
            <div className="hidden w-full max-w-sm mx-auto mb-5 text-red-600 font-mono bg-red-50 p-1 text-xs">
              Error: Account credentials are not correct! {clientId}
            </div>

            {/* Inputs div */}
            <div className="flex flex-col justify-center items-center w-full mb-6 px-2">
              <div className="w-full max-w-sm mb-3">
                <p className="text-gray-600 font-medium">E-Mail</p>
                <input
                  className="w-full bg-gray-50/50 text-xs rounded-sm px-1 py-2 border focus:outline focus:outline-surface500"
                  placeholder="email address"
                  value={userLoginCreds.email}
                  autoComplete="off"
                  autoFocus={false}
                  autoSave="off"
                  onChange={(e) =>
                    setUserLoginCreds({
                      ...userLoginCreds,
                      email: e.target.value,
                    })
                  }
                  type="email"
                />
              </div>
              <div className="w-full max-w-sm">
                <p className="text-gray-600 font-medium">Password</p>
                <div className="flex justify-start items-center gap-1 relative">
                  <input
                    className="w-full bg-gray-50/50 text-xs rounded-sm px-1 py-2 border focus:outline focus:outline-surface500"
                    placeholder="password"
                    value={userLoginCreds.password}
                    autoComplete="off"
                    autoFocus={false}
                    autoSave="off"
                    onChange={(e) =>
                      setUserLoginCreds({
                        ...userLoginCreds,
                        password: e.target.value,
                      })
                    }
                    type={passwordType}
                  />
                  {passwordType === "password" ? (
                    <Eye
                      className="absolute right-0 text-surfaceMixed400 hover:bg-surfaceMixed600/50 bg-surfaceMixed600/20 h-full w-8 p-1 cursor-pointer"
                      onClick={() => setPasswordType("text")}
                    />
                  ) : (
                    <EyeOff
                      className="absolute right-0 text-surfaceMixed400 hover:bg-surfaceMixed600/50 bg-surfaceMixed600/20 h-full w-8 p-1 cursor-pointer"
                      onClick={() => setPasswordType("password")}
                    />
                  )}
                </div>
              </div>
              <p className="text-start w-full max-w-sm text-surfaceMixed400 mt-2 underline cursor-pointer hover:text-surfaceMixed100">
                can't sign in?
              </p>
            </div>

            <div className="w-full max-w-sm mx-auto mb-8 px-2">
              <button
                disabled={clientStates.isLoading || userStates.isLoading}
                onClick={() =>
                  setUserStates({ ...userStates, isLoading: true })
                }
                className="w-full flex justify-center items-center text-center bg-surfaceMixed200 py-2 text-white hover:bg-surfaceMixed300 disabled:bg-surfaceMixed500 rounded"
              >
                Sign In
              </button>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center ">
                <span className="bg-white px-2 text-sm text-gray-500 border rounded">
                  OR
                </span>
              </div>
            </div>

            <p className="w-full text-center py-4 sm:bg-gray-100/75   text-surfaceMixed400 font-medium hover:text-surfaceMixed200 hover:underline cursor-pointer -mt-2">
              Create New Account
            </p>
          </>
        ) : (
          <div className="w-full max-w-sm mx-auto">
            <div className="mt-10 mb-4 flex flex-col justify-center items-center w-full">
              <p className="font-medium text-surfaceMixed300 text-lg tracking-wide text-center">
                Access blocked: Invalid credentials provided
              </p>
            </div>

            <p className="text-[13px] mt-6 w-full max-w-sm mx-auto mb-6 text-surfaceMixed100">
              You can’t sign in because this request doest have complete request
              credentials. You can try again later, or contact the developer
              about this issue.
              <span className="text-sky-600 font-medium ml-1">
                Learn more about this error
              </span>
            </p>

            <p className="font-mono text-xs mb-10">
              Error: client_id or callback missing
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Oauthv1;
