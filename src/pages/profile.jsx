import { useAuth } from "../lib/auth";

export default function ProfilePage() {
  const auth = useAuth();

  return auth.user ? (
    <div>
      <img
        className="inline-block h-10 w-10 rounded-full"
        src={auth.user.photoUrl}
        alt=""
      />
      <p>{auth.user.name}</p>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </div>
  ) : (
    <button onClick={(e) => auth.signinWithGitHub()}>Sign In</button>
  );
}
