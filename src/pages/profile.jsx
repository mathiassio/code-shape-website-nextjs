import { useAuth } from "../lib/auth";

export default function ProfilePage() {
  const auth = useAuth();

  return auth.user ? (
    <div>
      <p>{auth.user.name}</p>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </div>
  ) : (
    <button onClick={(e) => auth.signinWithGitHub()}>Sign In</button>
  );
}
