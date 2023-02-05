import React, { useEffect, useState } from "react";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import { IconButton, Tooltip } from "@mui/material";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  if (loading) {
    return <p className="noData">loading...</p>;
  }
  if (error) {
    return <p className="noData">Something wne t wrong :(</p>;
  }
  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>

          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <Tooltip title={copied ? "Copied" : "Copy"}>
              <IconButton aria-label="Example">
                <CopyAllIcon />
              </IconButton>
            </Tooltip>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
