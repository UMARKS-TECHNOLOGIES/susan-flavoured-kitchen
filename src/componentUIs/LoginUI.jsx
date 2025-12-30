import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginUI(props) {
  return (
    <div className="min-h-screen px-10 bg-[#fffcfa]">
      <div className="py-5">
        <img src={props.Logo} alt="Logo" className="h-20" />
      </div>

      <div className="h-[500px] flex">
        <div
          className="hidden lg:flex lg:w-1/2 bg-cover bg-center relative rounded-lg"
          style={{ backgroundImage: `url(${props.Abt2})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-white px-6 lg:px-12 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4">
              Log In
            </h1>
            <p className="text-base lg:text-xl max-w-md opacity-90">
              Welcome back! Please sign in to continue.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center lg:px-8 order-2">
          <div className="w-full max-w-lg bg-white lg:bg-transparent p-6 lg:p-0 rounded-xl lg:rounded-none shadow-sm lg:shadow-none border lg:border-none border-gray-100">
            <div className="space-y-5 lg:space-y-6">
              {props.localError && (
                <div className="text-red-500 text-sm text-center">
                  {props.localError}
                </div>
              )}

              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  value={props.formData.email}
                  onChange={e => props.handleChange('email', e.target.value)}
                  onKeyPress={props.handleKeyPress}
                  className="h-12 bg-gray-50/50 border-gray-200"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={props.showPassword ? 'text' : 'password'}
                    placeholder="Enter Your Password"
                    value={props.formData.password}
                    onChange={e =>
                      props.handleChange('password', e.target.value)
                    }
                    onKeyPress={props.handleKeyPress}
                    className="h-12 pr-10 bg-gray-50/50 border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => props.setShowPassword(!props.showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {props.showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  onClick={props.handleForgotPassword}
                  className="text-sm text-orange-500 hover:text-orange-600 font-medium"
                >
                  Forgot Password?
                </button>
              </div>

              <Button
                onClick={props.handleSubmit}
                disabled={props.submitting}
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white text-base font-bold rounded-lg shadow-md transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {props.submitting ? 'Logging in...' : 'Log In'}
              </Button>

              <div className="text-center pt-2">
                <span className="text-sm text-gray-600">
                  Don't have an account?{' '}
                </span>
                <button
                  onClick={props.handleSignUp}
                  className="text-sm text-orange-500 hover:text-orange-600 font-bold transition-colors ml-1"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
