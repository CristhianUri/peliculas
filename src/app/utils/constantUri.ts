const baseUrl= 'https://api.themoviedb.org/3'
export class  ConstantUri{
  public static readonly apikey= 'e885b273d297dc5f02121faaa4a88d7d';
  public static readonly  ValidateWithLogin= baseUrl+ '/authentication/token/validate_with_login';
  public static readonly  tokenNew= baseUrl+ '/authentication/token/new'
}
