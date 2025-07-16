import React, { useState } from 'react';
import { Upload, FileText, Image, Check, X, AlertCircle, Calendar, MapPin, User } from 'lucide-react';
import './Dashboard.css';

const SikkimTourDashboard = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleFileUpload = (files) => {
    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      const newFiles = Array.from(files).map(file => ({
        id: Date.now() + Math.random(),
        name: file.name,
        size: file.size,
        type: file.type,
        uploadDate: new Date().toLocaleString(),
        status: 'uploaded'
      }));
      
      setUploadedFiles(prev => [...prev, ...newFiles]);
      setUploading(false);
      setNotification({ type: 'success', message: `${files.length} file(s) uploaded successfully!` });
      
      setTimeout(() => setNotification(null), 3000);
    }, 1500);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  };

  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      handleFileUpload(files);
    }
  };

  const removeFile = (id) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== id));
    setNotification({ type: 'info', message: 'File removed successfully' });
    setTimeout(() => setNotification(null), 2000);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type) => {
    if (type.includes('pdf')) return <FileText className="file-icon pdf-icon" />;
    if (type.includes('image')) return <Image className="file-icon image-icon" />;
    return <FileText className="file-icon default-icon" />;
  };

  return (
    <div className="dashboard-wrapper">
    <div className="dashboard-header-bg"></div>
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <div className="header-icon">
              <MapPin className="map-icon" />
            </div>
            <div className="header-text">
              <h1 className="dashboard-title">Sikkim Tourism Dashboard</h1>
              <p className="dashboard-subtitle">Government Employee Portal - Tour Notice Management</p>
            </div>
          </div>
          <div className="header-right">
            <User className="user-icon" />
            <span className="employee-id">Employee ID: SK2024001</span>
          </div>
        </div>
      </div>

      <div className="main-content">
        {/* Notification */}
        {notification && (
          <div className={`notification ${notification.type}`}>
            {notification.type === 'success' && <Check className="notification-icon" />}
            {notification.type === 'error' && <X className="notification-icon" />}
            {notification.type === 'info' && <AlertCircle className="notification-icon" />}
            <span>{notification.message}</span>
          </div>
        )}

        {/* Upload Section */}
        <div className="upload-section">
          <div className="upload-header">
            <h2 className="upload-title">
              <Upload className="upload-icon" />
              <span>Upload Tour Notice Documents</span>
            </h2>
            <p className="upload-subtitle">Upload PDF files and images for tour notices and guides</p>
          </div>
          
          <div className="upload-content">
            <div 
              className={`upload-area ${dragOver ? 'drag-over' : ''}`}
              onDrop={handleDrop}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
            >
              {uploading ? (
                <div className="upload-loading">
                  <div className="spinner"></div>
                  <p className="loading-text">Uploading files...</p>
                </div>
              ) : (
                <div className="upload-prompt">
                  <div className="upload-icon-container">
                    <Upload className="upload-main-icon" />
                  </div>
                  <h3 className="upload-prompt-title">Upload your files</h3>
                  <p className="upload-prompt-text">
                    Drag and drop files here, or{' '}
                    <label htmlFor="file-upload" className="upload-link">
                      browse
                    </label>
                  </p>
                  <p className="upload-info">Supports: PDF, JPG, PNG, GIF (Max 10MB per file)</p>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.gif"
                    onChange={handleFileSelect}
                    className="file-input"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Files List */}
        {uploadedFiles.length > 0 && (
          <div className="files-section">
            <div className="files-header">
              <h3 className="files-title">
                <FileText className="files-icon" />
                Uploaded Files ({uploadedFiles.length})
              </h3>
            </div>
            
            <div className="files-grid">
              {uploadedFiles.map(file => (
                <div key={file.id} className="file-card">
                  <div className="file-card-header">
                    {getFileIcon(file.type)}
                    <button 
                      onClick={() => removeFile(file.id)}
                      className="remove-btn"
                    >
                      <X className="remove-icon" />
                    </button>
                  </div>
                  <div className="file-card-content">
                    <h4 className="file-name">{file.name}</h4>
                    <p className="file-size">{formatFileSize(file.size)}</p>
                    <p className="file-date">
                      <Calendar className="date-icon" />
                      {file.uploadDate}
                    </p>
                  </div>
                  <div className="file-card-footer">
                    <span className="file-status">
                      <Check className="status-icon" />
                      Uploaded
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon-container pdf-stat">
                <FileText className="stat-icon" />
              </div>
              <div className="stat-content">
                <h4 className="stat-value">{uploadedFiles.filter(f => f.type.includes('pdf')).length}</h4>
                <p className="stat-label">PDF Documents</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon-container image-stat">
                <Image className="stat-icon" />
              </div>
              <div className="stat-content">
                <h4 className="stat-value">{uploadedFiles.filter(f => f.type.includes('image')).length}</h4>
                <p className="stat-label">Images</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon-container total-stat">
                <Upload className="stat-icon" />
              </div>
              <div className="stat-content">
                <h4 className="stat-value">{uploadedFiles.length}</h4>
                <p className="stat-label">Total Files</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     </div>
  );
};

export default SikkimTourDashboard;