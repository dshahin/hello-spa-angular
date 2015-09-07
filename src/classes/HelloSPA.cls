public with sharing class HelloSPA {
	
	@ReadOnly
	@RemoteAction
	public static User[] getUsers() {
		return [Select Id, Name, FullPhotoUrl from User where IsActive = true];
	}
}