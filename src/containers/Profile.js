import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Profile = () => {

  const InnerLink = styled.a`
    color: #61dafb;
`;

  const ProfileWrapper = styled.div`
    width: 50%;
    margin: 10px auto;
`;

  const Avatar = styled.img`
    width: 150px;
`;

  const ListWrapper = styled.ul`
    list-style: none;
    padding: 0;
    text-align: left;
`;

  const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
`;
  
  const Label = styled.span`
    font-weight: bold;
`;

  const Title = styled.h2`
    padding: 10px 0;
    border-bottom: 1px solid lightgray;  
`;

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [repositories, setRepositories] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {

    try {

      const profile = await fetch('https://api.github.com/users/yurikbv');
      const profileJSON = await profile.json();

      if (profileJSON) {
        const repositories = await fetch(profileJSON.repos_url);
        const repositoriesJSON = await repositories.json();
        setData({...data, ...profileJSON});
        setRepositories(repositoriesJSON);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  if (loading || error) return <div>{loading ? 'Loading...' : error}</div>;

  const projects = repositories.map(repo => (
      <ListItem key={repo.id}>
        <Label>{repo.name}</Label>
        <InnerLink href={repo.html_url} target="_blank"> GitHub_URL </InnerLink>
      </ListItem>
  ));

  return (
      <ProfileWrapper>
        <Avatar src={data.avatar_url} alt='avatar' />
        <ListWrapper>
          <ListItem><Label>html_url:</Label>
            <InnerLink href={data.html_url}>Github URL</InnerLink>
          </ListItem>
          <ListItem><Label>repos_url:</Label> {data.repos_url}</ListItem>
          <ListItem><Label>name:</Label> {data.name}</ListItem>
          <ListItem><Label>company:</Label> {data.company}</ListItem>
          <ListItem><Label>location:</Label> {data.location}</ListItem>
          <ListItem><Label>email:</Label> {data.email}</ListItem>
          <Title>Projects</Title>
          {projects}
        </ListWrapper>
      </ProfileWrapper>
  );
};

export default Profile;