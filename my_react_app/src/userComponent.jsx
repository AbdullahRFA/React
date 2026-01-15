function LoginButton() {
  return <button>Login</button>;
}

export function ProfileCard() {
  return (
    <div>
      {" "}
      <h2>User Profile</h2>
      <p>Name: John Doe</p>
    </div>
  );
}

export function SettingsPanel() { 
    return (
        <div>
            <h2>Settings</h2>
            <p>Adjust your preferences here.</p>
        </div>
    );
}

export const userKey = "user_12345";

export default LoginButton;
