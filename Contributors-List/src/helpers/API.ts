import axios from 'axios';

/** @const  {function} getUsersData API call to Github to get user data, then 
 * object is filtered to pass only username and avatar url. */

export const getUsersData = (username: string):any =>
    axios.get(`https://api.github.com/users/${username}`)
        .then(data => {
            return {login: data.data.login, imgSrc: data.data.avatar_url}
        })
        .catch(() => null);

/** @const  {function} getReposData API call to Github to get repositories data, then 
 * object is filtered to pass only name and description. */

export const getReposData = (username: string):any =>
    axios.get(`https://api.github.com/users/${username}/repos`)
        .then(data => {
            return data.data.map((repo: { name: string; description: string; }) => {
                return {name: repo.name, description: repo.description}
            });
        })
        .catch(() => null);

/** @const  {function} getReposContributors API call to Github to get repositories data, then 
 * object is filtered to pass only an array of collaborators logins. */

export const getReposContributors = (username: string, repoName: string): any =>
  axios.get(`https://api.github.com/repos/${username}/${repoName}/contributors`)
    .then(data => {
      return data.data.map((collaborator: any) => collaborator.login);
    });